
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';

import Pie from './views/Pie';
import Line from './views/Line';

import {switchChart} from '../../actions/navigation';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const data = ds.cloneWithRows([
  {
    id: 2,
    title: '<PieChart>',
    description: 'Displays a PieChart'
  }, {
    id: 3,
    title: '<LineChart>',
    description: 'Displays a LineChart'
  }
]);

class Navbar extends Component {
  handleBack() {
    this.props.onChartChange(1);
  }
  
  render() {
    const backStyles = this.props.chartId === 1 ? [styles.navText, styles.right] : styles.navText;
    return (
      <View style={styles.bar}>
        <TouchableHighlight
          underlayColor='white'
          onPress={this.handleBack.bind(this)}
        >
          <Text style={backStyles}>Back</Text>
        </TouchableHighlight>
        <Text style={styles.navText}>{this.props.title}</Text>
        <Text style={styles.right}>Back</Text>
      </View>
    );
  }
}

class ChartList extends Component {
  static displayName = 'ChartList';

  renderRow = (row) => {
    const handlePress = () => {
        this.props.onChartChange(row.id);
    };

    return (
      <TouchableHighlight
        onPress={handlePress}
        underlayColor='rgba(200, 200, 200, 0.3)'
      >
        <View style={styles.listItem}>
          <Text style={styles.title}>{row.title}</Text>
          <Text style={styles.description}>{row.description}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <ListView
        dataSource={data}
        renderRow={this.renderRow}
        style={styles.list}
      />
    );
  }
}

class Charts extends Component {
  static displayName = 'ChartsExplorer';
  render() {
    let { chartId } = this.props;
      
    let content = null;
    let navText = 'Charts';
    switch (chartId) {
      case 1:
        content = <ChartList onChartChange={this.props.onChartChange}/>;
        navText = 'Charts';
        break;
      case 2:
        content = <Pie/>;
        navText = 'PieChart';
        break;
      case 3:
        content = <Line/>;
        navText = 'LineChart';
        break;
      default:
        content = null;
        break;
    }

    if (chartId !== 1) {
      content = <View style={styles.container}>{content}</View>;
    }
    return (
      <View style={{flex: 1}}>
        <Navbar
          title={navText}
          chartId={chartId}
          onChartChange={this.props.onChartChange}
        />
        {content}
      </View>
    );
  }
}

const select = (store) => {
    return {
        chartId: store.navigation.chartId || 1
    }
};

const actions = (dispatch) => {
    return {
        onChartChange: (chartId) => dispatch(switchChart(chartId))
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(230, 230, 230, 0.3)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 100, 100, 0.2)'
  },
  navText: {
    fontSize: 16
  },
  right: {
    opacity: 0
  },
  list: {
    backgroundColor: 'white',
    padding: 0
  },
  listItem: {
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 100, 100, 0.2)'
  },
  description: {
    marginTop: 5,
    fontSize: 12,
    color: 'rgba(100, 100, 100, 0.7)'
  }
});

export default connect(select, actions)(Charts);