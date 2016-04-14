/* @flow */
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const createCBStore = applyMiddleware(thunk)(createStore);

const configureStore = (onComplete) => {
  const store = autoRehydrate()(createCBStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
};

export default configureStore;