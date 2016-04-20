import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

import PieChart from '../mpchart/MPPieChart';

class RiskFactors extends Component {
  render() {
    const config = {
      dataSets: [{
        values: [0.14, 0.14, 0.34, 0.38],
        colors: ['rgb(197, 255, 140)', 'rgb(255, 247, 140)', 'rgb(255, 210, 141)', 'rgb(140, 235, 255)'],
        label: "Quarter Revenues 2014"
      }],
      noDataText: "No data yet!",
      labels: ['Smoking', 'Body Mass Index', 'Alcohole Intake', 'High Blood Pressure'],
      centerText: 'Relative Contribution of Risk Factors',
      legend: {
        position: 'aboveChartRight',
        wordWrap: true
      },
      valueFormatter: {
        type: 'regular',
        numberStyle: 'PercentStyle',
        maximumDecimalPlaces: 0
      }
    };

    return (
        <View style={{flex: 1}}>
            <PieChart style={styles.container} config={config} />
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

export default RiskFactors;