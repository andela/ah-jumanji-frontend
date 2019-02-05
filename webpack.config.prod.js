import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default function (env) {
  return {
    mode: 'production',
    entry: [
      'babel-polyfill',
      './src/index.js'
    ],
    plugins: [
      //for .env variables
      // new Dotenv({
      //   path: path.resolve(__dirname, './.env')
      // }),
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "chunk.css"
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false,
        BASE_URL: env.BASE_URL,
        FIREBASE_API_KEY: "AIzaSyDLqlYrfTIkjXb01oA_9svo107jkV-YzAg",
        FIREBASE_AUTH_DOMAIN: "ah-jumanji.firebaseapp.com",
        SOCIAL_AUTH_API_URL: "https://ah-jumanji-staging.herokuapp.com/api/users/social/auth"
      })
    ],
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
      publicPath: '/'
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          cache: true,
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          "test": /\.scss$/,
          "use": [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
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
}
