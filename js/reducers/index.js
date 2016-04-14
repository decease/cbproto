import { combineReducers } from 'redux';

export default combineReducers({
    user: require('./user').default,
    navigation: require('./navigation').default
});