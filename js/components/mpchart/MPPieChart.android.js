import React, {
  requireNativeComponent,
  Component,
  PropTypes,
  View,
  Text
} from 'react-native';

import {
  globalCommonProps,
  pieRadarCommonProps,
  commonDataSetProps
} from './utils/commonProps';

import {
  processColors
} from './utils/commonColorProps';

let MPPieChartComponent = requireNativeComponent('MPPieChart', MPPieChart);

class MPPieChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {config, ...otherProps} = this.props;
    config = processColors(config);

    return <MPPieChartComponent
      config={JSON.stringify(config) }
      {...otherProps}/>;
  }
}

MPPieChart.propTypes = {
  ...globalCommonProps,
  ...pieRadarCommonProps,
  config: React.PropTypes.shape({
    dataSets: React.PropTypes.arrayOf(React.PropTypes.shape({
        ...commonDataSetProps,
        // sliceSpace: React.PropTypes.number,
        // selectionShift: React.PropTypes.number
    })),
    labels: React.PropTypes.arrayOf(React.PropTypes.string),
    centerText: React.PropTypes.string,


    // holeColor: React.PropTypes.string,
    // drawHoleEnabled: React.PropTypes.bool,
    // drawCenterTextEnabled: React.PropTypes.bool,
    // holeRadiusPercent: React.PropTypes.number,
    // transparentCircleRadiusPercent: React.PropTypes.number,
    // maxAngle: React.PropTypes.number
  })
};

export default MPPieChart