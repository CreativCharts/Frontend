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

const pieSize = Math.min(chartSetting.width, chartSetting.height) * 0.9;

export const transformRowsToPieChartData = (rows) => {
    const series = [];
    
    rows.forEach((row, rowIdx) => {
        for (let i = 0; i < row.cells.length; i += 2) {
            if (row.cells[i] && row.cells[i + 1]) {
                if (row.cells[i].text || row.cells[i + 1].text) {
                    if (!series[i / 2]) series[i / 2] = { data: [] };
                    series[i / 2].data.push({ label: row.cells[i].text, value: parseInt(row.cells[i + 1].text, 10) || 0});
                }
            }
        }
    });

    // const seriesData = rows.map((row, index) => ({
    //     id: index,
    //     value: row.cells.reduce((sum, cell) => sum + (parseInt(cell.text) || 0), 0),
    //     label: `Row ${row.rowId}`
    // }));

    if (!series.length) series.push({ data: [] });

    const spacePerSeries = (pieSize / 2) / series.length;
    series.forEach((s, i) => {
        s.innerRadius = Math.floor(i * spacePerSeries);
        s.outerRadius = Math.floor((i + 1) * spacePerSeries);
    });

    return {
        series: series,
    };
};
