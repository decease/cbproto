/* @flow */
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import promise from './promise';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const createCBStore = applyMiddleware(thunk, promise)(createStore);

const configureStore = () => {
  console.log(reducers);  
  
  const store = createCBStore(reducers);
  
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
};

export default configureStore;