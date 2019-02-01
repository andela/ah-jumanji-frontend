import express from 'express';
import path from 'path';
import compression from 'compression';
// import favicon from 'serve-favicon';
import listenServer from "./utils";


/*eslint-disable no-console */

const port = process.env.PORT || 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
// app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


listenServer(app, port);

