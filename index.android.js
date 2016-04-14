/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
} from 'react-native';

import App from './components/App';

class cbproto extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('cbproto', () => cbproto);
