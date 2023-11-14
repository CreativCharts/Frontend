import {chartSetting, dashPieChartSetting} from "./chartSetting.js";

const pieSize =
    Math.min(
        chartSetting.width,
        chartSetting.height
    ) * 0.9;

export const transformRowsToPieChartData = (rows) => {
    if (!rows || !Array.isArray(rows) || rows.length === 0) {
        return {series: [{data: []}], ...chartSetting};
    }

    const series = [];

    rows.forEach((row) => {
        for (let i = 0; i < row.cells.length; i += 2) {
            if (row.cells[i] && row.cells[i + 1]) {


                if (row.cells[i].text || row.cells[i + 1].text) {
                    if (!series[i / 2])
                        series[i / 2] =
                            {data: []};

                    series[i / 2].data.push({
                        label: row.cells[i].text,
                        value: parseInt(row.cells[i + 1].text, 10) || 0
                    });
                }
            }
        }
    });

    if (!series.length) series.push({data: []});

    const spacePerSeries = (
        pieSize / 2) / series.length;

    series.forEach((s, i) => {

        s.innerRadius = Math.floor(i * spacePerSeries);
        s.outerRadius = Math.floor((i + 1) * spacePerSeries);
    });

    return {
        series,
        ...chartSetting,

    };
}


export const transformDashPie = (gridData) => {
    if (!gridData || !Array.isArray(gridData) || gridData.length === 0) {
        return {labels: [], datasets: []};
    }

    const dataRows = gridData.slice(1); // Ignoriere die erste Zeile

    const series = dataRows.map((row, index) => {
            const dataPoints = row.cells.slice(1).map(cell => {
                return {
                    value: parseFloat(cell.text) || 0
                };
            });

            return {
                label: `Series ${index + 1}`, // Oder eine benutzerdefinierte Beschriftung
                data: dataPoints
            };
        }
    );

    return {
        series,
        width: dashPieChartSetting.width,
        height: dashPieChartSetting.height
    };
}
