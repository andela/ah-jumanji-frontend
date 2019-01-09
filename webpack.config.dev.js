import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
    // add jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
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
            },
          },
        ],
      },
      {
        "test": /\.scss$/,
<<<<<<< HEAD
        "use": [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
=======
        "use": ['style-loader', 'css-loader', 'sass-loader'],
>>>>>>> ft(Login): implement login feature
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
