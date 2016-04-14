import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

class Home extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <Text>Home</Text>
        </View>
       );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  }
});

export default Home;