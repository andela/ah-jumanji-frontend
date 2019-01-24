import React from "react";
import {withRouter} from "react-router-dom";
import "bootstrap";
import {hot} from "react-hot-loader/root";
import { ToastContainer } from 'react-toastify';

import './assets/css/main.scss';
import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";


const App = (props) => (
  <div>
    <Navigation {...props} />
    <Main />
    <ToastContainer autoClose={8000} />
  </div>
);

export default hot(withRouter(App));
