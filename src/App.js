import React from "react";
import {withRouter} from "react-router-dom";
import "bootstrap";
import {hot} from "react-hot-loader/root";


import './assets/css/main.scss';
import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
);

export default hot(withRouter(App));
