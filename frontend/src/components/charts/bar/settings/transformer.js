export const transformRowsToBarChartData = (rows) => {

    const xAxisData = [];
    const seriesData = [];

    let maxCells = 1;
    let maxRow = 0;

    rows.forEach((row, i) => {

        const maxRowCell =
            row.cells.findLastIndex(cell =>
                cell.text.trim() !== '');

        maxCells = Math.max(maxCells, maxRowCell);
        if (maxRowCell >= 0) maxRow = i;
    });
    rows.forEach((row, rowIndex) => {
        if (rowIndex > maxRow) return;

        row.cells.forEach((cell, cellIndex) => {
            if (!cell || cellIndex > maxCells)
                return;

            if (cellIndex === 0) {
                xAxisData.push(cell.text);
            } else {

                const value = parseInt(
                    cell.text, 10) || 0;

                if (!seriesData[cellIndex - 1]) {

                    seriesData[cellIndex - 1] = {data: []};
                }

                seriesData[cellIndex - 1].data[rowIndex] = value;
            }
        });
    });

    return {
        series: seriesData,

        xAxis: [{scaleType: 'band', data: xAxisData}],


    };
}

