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
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false}))
      };
    }
    
    render() {
      if (this.state.isLoading) {
        return null;
      }
      
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