import React from 'react';
import 'bootstrap';
import 'popper.js';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import ConfigStore from './store/storeConfig';
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import bootstrap css styling

const store = ConfigStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
