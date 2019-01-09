import React from "react";
import { hot } from "react-hot-loader/root";

import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";
import "./assets/css/main.scss";

const App = () => {
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  );
};

export default hot(App);
