import React, {
  Component,
  Navigator,
  ScrollView,
  StyleSheet,
  ToolbarAndroid,
  Platform,
  View,
  Text
} from 'react-native';

import CBTabsView from './CBTabsView';

class CBNAvigator extends Component {
  render() {
    return (
      <Navigator
          ref="navigator"
          style={styles.container}
          initialRoute={{}}
          configureScene={() => {
            if (Platform.OS === 'android') {
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            } else {
              return Navigator.SceneConfigs.FloatFromBottom;
            }
          }}
          renderScene={this.renderScene}
      />
    );
  }
  
  renderScene(route, navigator) {
    return <CBTabsView navigator={navigator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default CBNAvigator;