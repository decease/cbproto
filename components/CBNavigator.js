import React, {
  Component,
  Navigator,
  ScrollView,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text
} from 'react-native';

import RiskFactors from './scenes/RiskFactors';

class CBNAvigator extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{title: "CB Title test"}}
          navigationBar={<ToolbarAndroid title="CB Test" />}
          configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          renderScene={(route) => this.renderScene(route)}
      />
    );
  }
  
  renderScene(route) {
    return (
            <View
              style={styles.container}
             >
                <RiskFactors />
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

export default CBNAvigator;