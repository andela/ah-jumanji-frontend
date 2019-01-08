import 'bootstrap';
import 'popper.js';
import React from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';

import App from "./App";
import ConfigStore from './store/storeConfig';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css styling

const store = ConfigStore();

render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root')
);
