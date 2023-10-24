import {pData, uData, xLabels} from './dataset.js';

const chartSetting = {
  width: 1500,
  height: 520,
  series: [
    {data: pData, label: 'pData', id: '0'},
    {data: uData, label: 'uData', id: '1'},
    {data: pData, label: 'pvId', id: 'pvId'},

  ],
  xAxis: [{scaleType: 'point', data: xLabels}],
  sx: {
    '.MuiLineElement-root, .MuiMarkElement-root': {
      strokeWidth: 1,
    },
    '.MuiLineElement-series-pvId': {
      strokeDasharray: '5 5',
    },
    '.MuiLineElement-series-uvId': {
      strokeDasharray: '3 4 5 2',
    },
    '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
      fill: '#fff',
    },
    '& .MuiMarkElement-highlighted': {
      stroke: 'none',
    },
  },
};

export default chartSetting;
