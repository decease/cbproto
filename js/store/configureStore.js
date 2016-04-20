/* @flow */
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';

import reducers from '../reducers';
import promise from './promise';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createCBStore = applyMiddleware(thunk, promise, logger)(createStore);

const configureStore = (onComplete) => {
  //const store = autoRehydrate()(createCBStore)(reducers);
  //persistStore(store, {storage: AsyncStorage}, onComplete);
  
  const store = createCBStore(reducers);
  setTimeout(() => onComplete(), 10);
  
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
};

export default configureStore;