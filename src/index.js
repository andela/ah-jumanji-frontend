import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {AppContainer} from 'react-hot-loader';
import ErrorBoundary from 'react-error-boundaries';
import ConfigStore, {history} from './store/storeConfig';
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import ErrorPage from "./apps/error pages/components/error404Page";

const store = ConfigStore();

render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

export default store;
