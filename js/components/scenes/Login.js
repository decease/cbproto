import React, {
  Image,
  Component,
  Dimensions,
  StatusBarIOS,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Button from 'apsl-react-native-button'
import { connect } from 'react-redux';
import { logInWithOAuth } from '../../actions';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false,
      username: 'ann.smith',
      password: 'Hell@123'
    };
  }

  render() {
    console.log(this.props.user);
    
    return (
      <Image
        style={styles.container}
        source={require('../img/login-background.png')}
        >
        <View style={styles.section}>
          <Image source={require('../img/logo.png')}>
          </Image>
        </View>
        <View style={styles.loginForm}>
          <TextInput
              style={styles.input}
              underlineColorAndroid='rgba(124,122,135,0.3)'
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          <TextInput
              style={styles.input}
              secureTextEntry={true}
              underlineColorAndroid='rgba(124,122,135,0.3)'
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
        </View>
        <View style={styles.section}>
          <Button
            style={styles.loginButton}
            textStyle={{color: '#FFFDFE'}}
            onPress={this.login.bind(this)}
            isLoading={this.state.isLoading} 
          >
          Sign In
          </Button>
        </View>
      </Image>
    );
  }
  
  async login() {
    const {dispatch} = this.props;
    const {username, password} = this.state;

    this.setState({isLoading: true});
 
    try {
      await dispatch(logInWithOAuth(username, password));
    } catch (e) {
      const message = e.message || e;
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        alert(message);
        console.warn(e);
      }
      return;
    } finally {
      this.setState({isLoading: false});
    }
  }
}

const scale = Dimensions.get('window').width / 375;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    justifyContent: 'flex-end',
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Math.round(74 * scale),
    color: '#032250',
    backgroundColor: 'transparent',
  },
  h2: {
    textAlign: 'center',
    fontSize: 17,
    color: '#032250',
    marginVertical: 20,
  },
  h3: {
    fontSize: 12,
    textAlign: 'center',
    color: '#7F91A7',
    letterSpacing: 1,
  },
  loginForm: {
    
  },
  input: {
    fontSize: 16,
    color: 'rgb(124,122,135)'
  },
  loginButton: {
    backgroundColor: '#00BFF3',
    borderColor: '#FFFFFF'
  }
});

export default connect()(LoginScreen);