/* @flow */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const createCBStore = applyMiddleware(thunk)(createStore);

const configureStore = (onComplete) => {
  const store = createCBStore(reducers);
  
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
};

export default configureStore;