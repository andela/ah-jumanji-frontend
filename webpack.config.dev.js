import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';

import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  "mode": "development",
  "entry": [
    'babel-polyfill',
    './src/index'
  ],
  "target": 'web',
  "devServer": {
    // specify the location of the source code to be bundled
    "contentBase": './src',
    // enable hot reloading
    "hot": true,
  },
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js",
    "publicPath": '/'
  },
  "devtool": "cheap-module-eval-source-map",
  "plugins": [
    // A webpack plugin to remove/clean the build folder(s) before building
    new CleanWebpackPlugin(['dist']),
    // enable hot reloading
    new webpack.HotModuleReplacementPlugin(),
    //for .env variables
    new Dotenv(),
    // add jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    // extract css from sass and save it in css file.
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.SOCIAL_AUTH_API_URL': JSON.stringify(process.env.SOCIAL_AUTH_API_URL)
    })
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
              presets: ['react','es2015', 'stage-2']
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
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
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
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
  },
  resolve: {
    modules: ['node_modules']
  }
};
