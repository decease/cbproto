var Animated = require('Animated');
var Dimensions = require('Dimensions');
var Image = require('Image');
var React = require('React');
var StatusBarIOS = require('StatusBarIOS');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');

var TouchableOpacity = require('TouchableOpacity');

var { connect } = require('react-redux');

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    StatusBarIOS && StatusBarIOS.setStyle('default');
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  }

  render() {
    return (
      <Image
        style={styles.container}
        source={require('../img/login-background.png')}
        >
        <View style={styles.section}>
          <Animated.Text style={[styles.h1, this.fadeIn(700, -20)]}>
            Carebook
          </Animated.Text>
          <Animated.Text style={[styles.h2, this.fadeIn(1000, 10)]}>
            The quality of your family's healthcare is now in the best hands...yours.
          </Animated.Text>
        </View>
        <Animated.View style={[styles.section, styles.last, this.fadeIn(2500, 20)]}>
          <Text style={styles.loginComment}>
            Carebook Inc.
          </Text>
          
        </Animated.View>
      </Image>
    );
  }

  fadeIn(delay, from = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }
}

const scale = Dimensions.get('window').width / 375;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    // Image's source contains explicit size, but we want
    // it to prefer flex: 1
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
  loginComment: {
    marginBottom: 14,
    fontSize: 12,
    color: '#032250',
    textAlign: 'center',
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  },
});

module.exports = connect()(LoginScreen);