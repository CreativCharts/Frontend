export const chartSetting = {
  width: 1500,
  height: 520,
  xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
  series: [
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]
};

export const transformRowsToLineChartData = (rows) => {
  const xAxisData = rows.map(row => `Row ${row.rowId}`);
  const seriesData = rows.map(row => row.cells.map(cell => parseInt(cell.text) || 0));

  return {
    xAxis: [{ data: xAxisData }],
    series: seriesData.map(data => ({ data }))
  };
};

