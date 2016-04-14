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

let MPPieChart = requireNativeComponent('MPPieChart', PieChart);

class PieChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MPPieChart {...this.props}/>;
    }
}

PieChart.propTypes = {
    ...globalCommonProps,
    ...pieRadarCommonProps,
    config: React.PropTypes.shape({
        dataSets: React.PropTypes.arrayOf(React.PropTypes.shape({
            ...commonDataSetProps,
            sliceSpace: React.PropTypes.number,
            selectionShift: React.PropTypes.number
        })),
        labels: React.PropTypes.arrayOf(React.PropTypes.string),
        holeColor: React.PropTypes.string,
        drawHoleEnabled: React.PropTypes.bool,
        centerText: React.PropTypes.string,
        drawCenterTextEnabled: React.PropTypes.bool,
        holeRadiusPercent: React.PropTypes.number,
        transparentCircleRadiusPercent: React.PropTypes.number,
        maxAngle: React.PropTypes.number
    })
};

export default PieChart