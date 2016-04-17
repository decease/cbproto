import React from 'react-native';

export const commonDataSetProps = {
  values: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  label: React.PropTypes.string,
  colors: React.PropTypes.arrayOf(React.PropTypes.string),
  drawValues: React.PropTypes.bool,
  highlightEnabled: React.PropTypes.bool,
  valueTextFontName: React.PropTypes.string,
  valueTextFontSize: React.PropTypes.number,
  valueTextColor: React.PropTypes.string
};

export const globalCommonProps = {
  labels: React.PropTypes.arrayOf(React.PropTypes.string),
  backgroundColor: React.PropTypes.string,
  noDataText: React.PropTypes.string,
  descriptionText: React.PropTypes.string,
  descriptionTextColor: React.PropTypes.string,
  descriptionFontName: React.PropTypes.string,
  descriptionFontSize: React.PropTypes.number,
  descriptionTextPosition: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number
  }),
  drawMarkers: React.PropTypes.bool,
  dragDecelerationEnabled: React.PropTypes.bool,
  dragDecelerationFrictionCoef: React.PropTypes.number,
  highlightPerTap: React.PropTypes.bool,
  showLegend: React.PropTypes.bool,
  legend: React.PropTypes.shape({
    textColor: React.PropTypes.string,
    textFontName: React.PropTypes.string,
    textSize: React.PropTypes.number,
    wordWrap: React.PropTypes.bool,
    maxSizePercent: React.PropTypes.number,
    position: React.PropTypes.oneOf([
      'rightOfChart',
      'rightOfChartCenter',
      'rightOfChartInside',
      'leftOfChart',
      'leftOfChartCenter',
      'leftOfChartInside',
      'belowChartLeft',
      'belowChartRight',
      'belowChartCenter',
      'aboveChartLeft',
      'aboveChartRight',
      'aboveChartCenter',
      'pieChartCenter'
    ]),
    form: React.PropTypes.oneOf([
      'square',
      'circle',
      'line'
    ]),
    formSize: React.PropTypes.number,
    xEntrySpace: React.PropTypes.number,
    yEntrySpace: React.PropTypes.number,
    formToTextSpace: React.PropTypes.number,
    colors: React.PropTypes.arrayOf(React.PropTypes.string),
    labels: React.PropTypes.arrayOf(React.PropTypes.string)
  }),
  // TODO: 'highlightValues' - Not implemented yet
  //highlightValues: React.PropTypes.arrayOf(React.PropTypes.number),
  animation: React.PropTypes.shape({
    xAxisDuration: React.PropTypes.number,
    yAxisDuration: React.PropTypes.number,
    easingOption: React.PropTypes.oneOf([
      'linear',
      'easeInQuad',
      'easeOutQuad',
      'easeInOutQuad',
      'easeInCubic',
      'easeOutCubic',
      'easeInOutCubic',
      'easeInQuart',
      'easeOutQuart',
      'easeInOutQuart',
      'easeInSine',
      'easeOutSine',
      'easeInOutSine',
      'easeInExpo',
      'easeOutExpo',
      'easeInOutExpo',
      'easeInCirc',
      'easeOutCirc',
      'easeInOutCirc',
      'easeInElastic',
      'easeOutElastic',
      'easeInBack',
      'easeOutBack',
      'easeInOutBack',
      'easeInBounce',
      'easeOutBounce',
      'easeInOutBounce'
    ])
  }),
  valueFormatter: React.PropTypes.shape({
    type: React.PropTypes.oneOf(['regular', 'abbreviated']),
    minimumDecimalPlaces: React.PropTypes.number,
    maximumDecimalPlaces: React.PropTypes.number,
    numberStyle: React.PropTypes.oneOf([
      'CurrencyAccountingStyle',
      'CurrencyISOCodeStyle',
      'CurrencyPluralStyle',
      'CurrencyStyle',
      'DecimalStyle',
      'NoStyle',
      'OrdinalStyle',
      'PercentStyle',
      'ScientificStyle',
      'SpellOutStyle'
    ])
  })
};

export const pieRadarCommonProps = {
  rotationEnabled: React.PropTypes.bool,
  rotationAngle: React.PropTypes.number
};