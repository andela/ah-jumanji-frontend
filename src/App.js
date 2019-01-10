import React from "react";
import { hot } from "react-hot-loader/root";

import './assets/css/main.scss';
import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";


const App = () => (
  <div className="jumbotron">
    <Navigation />
    <Main />
    <h1>Hey there,Welcome to authors Haven</h1>
    <a href="text.html">

    Hello test
    </a>
    <button className="btn btn-success" type="button">
      <i className="fas fa-home"> Submit</i>
    </button>
  </div>
);

export default hot(App);
