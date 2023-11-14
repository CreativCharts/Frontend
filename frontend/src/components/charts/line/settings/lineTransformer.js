import {chartSetting, dashLineChartSetting} from "./chartSetting.js";

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
                    series[i - 1] = {data: [], label: cell.text};
                } else {
                    series[i - 1].data[j - 1] = parseInt(cell.text, 10) || 0;
                }
            }

        });
    });

    if (!series.length) series.push({data: [0], label: ''});
    if (!xLabels.length) xLabels.push('');

    return {
        series,
        xAxis: [{scaleType: 'point', data: xLabels}],
        width: chartSetting.width,
        height: chartSetting.height
    };
};


export const transformDashLine = (gridData) => {
    if (!gridData || !Array.isArray(gridData) || gridData.length === 0) {
        return { labels: [], datasets: [] };
    }

    const labels = gridData[0].cells.slice(1).map(cell => cell.text);
    const chartData = gridData.slice(1).map(row => ({
        label: `Series ${row.rowId}`,
        data: row.cells.slice(1).map(cell => parseFloat(cell.text) || 0)
    }));

    console.log("Chart data:", chartData);
    return {
        labels,
        datasets: chartData,
        ...dashLineChartSetting
    };
};
