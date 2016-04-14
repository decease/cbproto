import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

import PieChart from './mpchart/PieChart';

export default class Pie extends Component {
  render() {
    const config = {
      dataSets: [{
        values: [0.14, 0.14, 0.34, 0.38],
        colors: ['#C5FF8C', '#FFF78C', '#FFD28D', '#8CEBFF'],
        label: ""
      }],
      labels: ['Smoking', 'Body Mass Index', 'Alcohole Intake', 'High Blood Pressure'],
      centerText: 'Relative Contribution of Risk Factors',
      legend: {
        position: 'aboveChartRight',
        wordWrap: true
      },
      usePercentValues: true,
      valueFormatter: {
        type: 'regular',
        numberStyle: 'PercentStyle',
        maximumDecimalPlaces: 0
      }
    };

    return <PieChart style={styles.container} config={config} />;
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