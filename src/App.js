import React from "react";
import {withRouter} from "react-router-dom";
import "bootstrap";
import {hot} from "react-hot-loader/root";
import {ToastContainer} from 'react-toastify';

import Main from "./apps/Navigation/Routes";
import Navigation from "./apps/Navigation/Navbar";
import "./assets/css/main.scss";
import ErrorBoundary from "./apps/error pages/components/errorBoundary";


const App = (props) => (
  <div>
    <ErrorBoundary>
      <Navigation {...props} />
      <Main />
      <ToastContainer autoClose={8000} />
    </ErrorBoundary>
  </div>
);

export default hot(withRouter(App));
