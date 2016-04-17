import { Provider } from 'react-redux';
import React, {
  Component
} from 'react-native';

import configureStore from './store/configureStore';
import CBApp from './components/CBApp';

const setup = () => {
  console.disableYellowBox = true;

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        store: configureStore()
      };
    }
    
    render() {
      console.log(this.state.store.getState());
      return (
        <Provider store={this.state.store}>
          <CBApp />
        </Provider>
      );
    }
  }
  
  return Root;
}

export default setup;