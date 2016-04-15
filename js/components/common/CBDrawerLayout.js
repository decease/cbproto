/* @flow */
import React, {
  Component,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native';

class CBDrawerLayout extends Component {
  _drawer = null;
  
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

  componentWillUnmount() {
    this._drawer = null;
  }

  onDrawerOpen() {
    this.props.onDrawerOpen && this.props.onDrawerOpen();
  }

  onDrawerClose() {
    this.props.onDrawerClose && this.props.onDrawerClose();
  }
  
  closeDrawer() {
    this._drawer && this._drawer.closeDrawer();
  }

  openDrawer() {
    this._drawer && this._drawer.openDrawer();
  }
}

var styles = StyleSheet.create({

});

export default CBDrawerLayout;