import React, {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

import PieChart from '../mpchart/PieChart';

class RiskFactors extends Component {
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
      animateY: {
          duration: 500
      },
      usePercentValues: true,
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