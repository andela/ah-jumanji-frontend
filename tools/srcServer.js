import express from 'express';
import webpack from 'webpack';
import path from 'path';
import cors from 'cors';
import configuration from '../webpack.config.dev';
import listenServer from "./utils";


// define the default port for the application to run
const port = 3000;
// create an express server instance
const Application = express();
// load the webpack configuration as defined in the root directory
const compiler = webpack(configuration);


// set up the applications middle ware to be used for development
// noInfo == false means that we see log information on the commandline as the server runs
Application.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: configuration.output.publicPath
}));

// use the webpack hot reloading middleware and use the compiled webpack configuration;
Application.use(require('webpack-hot-middleware')(compiler));

// enables CORS
Application.use(cors());

// define the endpoints to the entry file for our application
Application.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


listenServer(Application, port);
