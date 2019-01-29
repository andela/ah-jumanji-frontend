import open from "open";
/*eslint-disable no-console */

export default function listenServer(application, port) {
  application.listen(port, function (err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}
