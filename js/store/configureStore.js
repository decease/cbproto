/* @flow */
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const configureStore = () => {
  const store = createStore(
      reducers,
      applyMiddleware(thunk)
  );
  
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
};

export default configureStore;