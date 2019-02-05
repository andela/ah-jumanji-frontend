import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  createLogger
} from 'redux-logger';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

// import promise from 'redux-promise-middleware'

import initialState from './initialState';
import rootReducer from '../apps/rootReducer';

export const history = createBrowserHistory();

function jumanjiStore() {

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(thunk, createLogger(), routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose)
  );
  /* eslint-enable */

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../apps/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;

}

export default jumanjiStore;
