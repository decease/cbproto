import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

import RiskFactors from './scenes/RiskFactors';
import Home from './scenes/Home';
import CBDrawerLayout from './common/CBDrawerLayout';
import MenuItem from './common/MenuItem';
import ProfilePicture from './common/ProfilePicture';


class CBTabsView extends Component {
  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
    this.refs.drawer.closeDrawer();
  }

  renderContent() {
    //const { tab } = this.props;
    const tab = 'risks';
    switch (tab) {
      case 'home':
        return <Home navigator={this.props.navigator} />;
      case 'risks':
        return <RiskFactors navigator={this.props.navigator} />;
    }
    throw new Error(`Unknown tab ${this.props.tab}`);
  }

  renderNavigationView() {
    var name = 'Ann Smith';//this.props.user.name || '';
    
    let accountItem = (
      <View>
        <TouchableOpacity>
          <ProfilePicture size={80} />
        </TouchableOpacity>
        <Text style={styles.name}>
          {name.toUpperCase() }
        </Text>
      </View>
    );

    return (
      <View style={styles.drawer}>
        <Image
          style={styles.header}
          source={require('./img/drawer-header.png') }>
          {accountItem}
        </Image>
        <MenuItem
          title="My Risks"
          selected={this.props.tab === 'risks'}
          onPress={this.onTabSelect.bind(this, 'risks') }
          //icon={risksIcon}
          //selectedIcon={risksIconSelected}
          />
      </View>
    );
  }

  render() {
    return (
      <CBDrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView.bind(this) }>
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent() }
        </View>
      </CBDrawerLayout>
    );
  }
}

var styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
  header: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1
  }
});

export default CBTabsView;