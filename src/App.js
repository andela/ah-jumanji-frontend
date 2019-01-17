import React from "react";
import { hot } from "react-hot-loader/root";
import { ToastContainer } from 'react-toastify';

import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";
import "./assets/css/main.scss";


const App = () => (
  <div className="jumbotron">
    <Navigation />
    <Main />
    <ToastContainer autoClose={8000} />
  </div>
);

export default hot(App);
