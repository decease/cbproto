/* @flow */
import React, {
  Component,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Image
} from 'react-native';

class MenuItem extends Component {
  props: {
    icon: number;
    selectedIcon: number;
    selected: boolean;
    title: string;
    onPress: () => void;
  };

  render() {
    let icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
    let selectedTitleStyle = this.props.selected && styles.selectedTitle;

    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} />
          <Text style={[styles.title, selectedTitleStyle]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: '#7F91A7',
  },
  selectedTitle: {
    color: '#032250',
  },
  badge: {
    backgroundColor: '#DC3883',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: 'white',
  },
});

export default MenuItem;