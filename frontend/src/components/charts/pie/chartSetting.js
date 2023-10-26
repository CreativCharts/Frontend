export const chartSetting = {
    width: 1500,
    height: 500,
    series: [
        {
            data: [
                {id: 0, value: 10, label: 'series A'},
                {id: 1, value: 15, label: 'series B'},
                {id: 2, value: 20, label: 'series C'}
            ],
        }
    ]
};

export const transformRowsToPieChartData = (rows) => {
    const seriesData = rows.map((row, index) => ({
        id: index,
        value: row.cells.reduce((sum, cell) => sum + (parseInt(cell.text) || 0), 0),
        label: `Row ${row.rowId}`
    }));

    return {
        series: [{data: seriesData}]
    };
};
