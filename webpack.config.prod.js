import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  mode: "production",
  entry: [
    'babeb-polyfill',
    './src/index'
  ],
  output: {
    path: __dirname + 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    module.exports = {
      optimization: {
        minimizer: [
          // we specify a custom UglifyJsPlugin here to get source maps in production
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
        ]
      }
    },
    new Dotenv(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  "module": {
    "rules": [
      {
        "test": /.js$/,
        "exclude": /node_modules/,
        "use": [
          {
            "loader": 'babel-loader',
            "options": {
              "cacheDirectory": true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        "test": /\.scss$/,
        "use": [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        "test": /\.(png|jpg|gif)$/,
        "use": [
          {
            "loader": 'file-loader',
            "options": {},
          },
        ],
      },

    ]
  }
};
