import express from 'express';
import path from 'path';
import compression from 'compression';
import listenServer from "./utils";


const port = process.env.PORT || 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


listenServer(app, port);

