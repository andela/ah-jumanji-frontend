import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';

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
    // webpack options
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
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
    }),
    new Dotenv()
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
