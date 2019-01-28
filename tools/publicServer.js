import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import favicon from 'serve-favicon';


/*eslint-disable no-console */

const port = process.env.PORT || 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

