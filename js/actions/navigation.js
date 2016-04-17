const switchTab = (tab) => ({
  type: 'SWITCH_TAB',
  tab
});

const switchChart = (chartId) => ({
  type: 'SWITCH_CHART',
  tab: 'charts',
  chartId
})

export { switchTab, switchChart };