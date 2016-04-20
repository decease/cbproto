import React, {
  requireNativeComponent,
  Component,
  PropTypes
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

    console.log(config);

    return <MPPieChartComponent
      config={config}
      {...otherProps}/>;
  }
}

MPPieChart.propTypes = {
  config: React.PropTypes.shape({
    ...globalCommonProps,
    ...pieRadarCommonProps,
    dataSets: React.PropTypes.arrayOf(React.PropTypes.shape({
      ...commonDataSetProps,
      sliceSpace: React.PropTypes.number,
      selectionShift: React.PropTypes.number
    })),
    holeColor: React.PropTypes.string,
    holeTransparent: React.PropTypes.bool,
    holeAlpha: React.PropTypes.number,
    drawHoleEnabled: React.PropTypes.bool,
    centerText: React.PropTypes.string,
    drawCenterTextEnabled: React.PropTypes.bool,
    holeRadiusPercent: React.PropTypes.number,
    transparentCircleRadiusPercent: React.PropTypes.number,
    drawSliceTextEnabled: React.PropTypes.bool,
    usePercentValuesEnabled: React.PropTypes.bool,
    centerTextRadiusPercent: React.PropTypes.number,
    maxAngle: React.PropTypes.number
  })
};

export default MPPieChart