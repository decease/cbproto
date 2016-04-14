/* @flow */
import React, {
  Component,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native';

class CBDrawerLayout extends Component {
  _drawer: ?DrawerLayoutAndroid;

  render() {
    const {drawerPosition, ...props} = this.props;
    const {Right, Left} = DrawerLayoutAndroid.positions;

    return (
      <DrawerLayoutAndroid
        ref={(drawer) => this._drawer = drawer}
        {...props}
        drawerPosition={drawerPosition === 'right' ? Right : Left}
        onDrawerOpen={this.onDrawerOpen.bind(this) }
        onDrawerClose={this.onDrawerClose.bind(this) }
        />
    );
  }

  onDrawerOpen() {
    this.props.onDrawerOpen && this.props.onDrawerOpen();
  }

  onDrawerClose() {
    this.props.onDrawerClose && this.props.onDrawerClose();
  }
}

var styles = StyleSheet.create({

});

export default CBDrawerLayout;