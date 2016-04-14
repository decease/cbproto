import React, {
    Component,
    StyleSheet,
    StatusBar,
    View,
    Text
} from 'react-native';

import CBNavigator from './CBNavigator';
import Login from './scenes/Login';

export default class CBApp extends Component {
    render() {
        // if (false) {
        //     return <Login />;
        // }
        
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