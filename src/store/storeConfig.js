import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  createLogger
} from 'redux-logger';

// import promise from 'redux-promise-middleware';

import initialState from './initialState';
import rootReducer from '../apps/rootReducer';

function jumanjiStore() {

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose)
  );
  /* eslint-enable */

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../apps/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;

}

export default jumanjiStore;
