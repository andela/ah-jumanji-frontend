import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from 'dotenv-webpack';

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
            },
          },
        ],
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
