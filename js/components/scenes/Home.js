import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={{flex: 1, alignSelf: 'center'}}>Welcome, {this.props.user.name}</Text>
        </View>
       );
  }
}

const select = (store) => ({
  user: store.user,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  }
});

export default connect(select)(Home);;