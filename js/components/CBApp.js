import React, {
    Component,
    StyleSheet,
    StatusBar,
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import CBNavigator from './CBNavigator';
import Login from './scenes/Login';

class CBApp extends Component {
    constructor(props) {
        super(props);
        AppState.addEventListener('change', this.handleAppStateChange);
    }
    
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    
    handleAppStateChange(appState) {
        if (appState === 'active') {
            // TODO;
        }
    }
    
    render() {
        if (!this.props.isLoggedIn) {
          return <Login />;
        }
        
        return (
          <View style={{flex: 1}}>
              <StatusBar
                translucent={false}
                backgroundColor="rgba(0, 0, 0, 0.2)"
                barStyle="light-content"
               />
              <CBNavigator />
          </View> 
        );
    }
}

const select = (store) => ({ isLoggedIn: store.user.isLoggedIn });

export default connect(select)(CBApp);