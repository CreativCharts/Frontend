export const chartSetting = {
  width: 1500,
  height: 520,
  // xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
  // series: [
  //   {
  //     data: [2, 5.5, 2, 8.5, 1.5, 5],
  //   },
  // ]
};

/*
____________, XAxis Label 1 , XAxis Label 2 , ...
Line 1 Label, Line 1 value 1, line 1 value 2, ...
Line 2 Label, Line 2 value 1, line 2 value 2, ...
*/

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];
// series={[
//   { data: pData, label: 'pv' },
//   { data: uData, label: 'uv' },
// ]}
// xAxis={[{ scaleType: 'point', data: xLabels }]}

export const transformRowsToLineChartData = (rows) => {
  const series = [];
  const xLabels = [];

  let maxCells = 1;
  let maxRow = 1;
  rows.forEach((row, i) => {
      const maxRowCell = row.cells.findLastIndex(cell => cell.text.trim() !== '');
      maxCells = Math.max(maxCells, maxRowCell);
      if (i > 0 && maxRowCell >= 0) maxRow = i;
  });

  rows.forEach((row, i) => {
    if (i > maxRow) return;
    row.cells.forEach((cell, j) => {
      if (j > maxCells) return;
      if (i === 0) {
        if (j === 0) return;
        xLabels[j - 1] = cell.text || `Column ${j}`;
      } else {
        if (j === 0) {
          series[i - 1] = { data: [], label: cell.text };
        } else {
          series[i - 1].data[j - 1] = parseInt(cell.text, 10) || 0;
        }
      }

    });
  });

  if (!series.length) series.push({ data: [0], label: '' });
  if (!xLabels.length) xLabels.push('');

  // return {
  //   series: [{ data: [1, 2, 3], label: 'A' }, { data: [3, 2, 1], label: 'B' }],
  //   xAxis: [{ scaleType: 'point', data: ['X', 'Y', 'Z'] }],
  // };

  return {
    series,
    xAxis: [{ scaleType: 'point', data: xLabels }],
  };

  // const xAxisData = rows.map(row => `Row ${row.rowId}`);
  // const seriesData = rows.map(row => row.cells.map(cell => parseInt(cell.text) || 0));

  // return {
  //   xAxis: [{ data: xAxisData }],
  //   series: seriesData.map(data => ({ data }))
  // };
};

