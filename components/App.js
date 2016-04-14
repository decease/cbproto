import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

import Pie from './Pie';

export default class App extends Component {
    render() {
        return (
          <View style={{flex: 1}}>
              <View style={styles.container}>
                  <Pie></Pie>
              </View>
          </View> 
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30
  }
});