import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";

import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";

const App = () => {
  return (
    <div className="jumbotron">
      <h1>AUTHORS HAVEN.</h1>
      <Navigation />
      <Main />
    </div>
  );
};

export default hot(App);
