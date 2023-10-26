export const chartSettings = {
    // uData: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    // xLabels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    width: 1500,
    height: 500,
    series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
    xAxis: [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]
};

/*
Title Group A, value 1, value 2, ..., value x
Title Group B, value 1, value 2, ..., value x
*/


export const transformRowsToBarChartData = (rows) => {
    // const dataset = [];
    const xAxisData = [];
    const seriesData = [];

    let maxCells = 1;
    let maxRow = 0;
    rows.forEach((row, i) => {
        const maxRowCell = row.cells.findLastIndex(cell => cell.text.trim() !== '');
        maxCells = Math.max(maxCells, maxRowCell);
        if (maxRowCell >= 0) maxRow = i;
    })
    rows.forEach((row, rowIndex) => {
        if (rowIndex > maxRow) return;
        row.cells.forEach((cell, cellIndex) => {
            if (!cell || cellIndex > maxCells) return;
            if (cellIndex === 0) {
                xAxisData.push(cell.text);
            } else {
                const value = parseInt(cell.text, 10) || 0;
                if (!seriesData[cellIndex - 1]) {
                    seriesData[cellIndex - 1] = { data: [] };
                }
                seriesData[cellIndex - 1].data[rowIndex] = value;
                // dataset.push({x: `Row ${rowIndex} Col ${cellIndex}`, y: value});
                // xAxisData.push(`Row ${rowIndex} Col ${cellIndex}`);

            }
        });
    });

    return {
        // dataset,
        series: seriesData,
        xAxis: [{ scaleType: 'band', data: xAxisData}],
    };
};
