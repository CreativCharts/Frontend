/*

export const transformRowsToDashboardLineChartData = (chartData) => {
    if (!chartData || !Array.isArray(chartData.gridData) || chartData.gridData.length === 0) {
        console.error('Ungültige Daten für die Line-Chart-Transformation');
        return {labels: [], datasets: []};
    }

    const categories = chartData.gridData[0].cells.slice(1).map(
        cell => cell.text);

    const seriesData = chartData.gridData.slice(1).map(
        row => row.cells.slice(1).map(cell => parseFloat(cell.text) || 0));

    return {
        labels: categories,
        datasets: seriesData.map((data, index) => ({
            label: `Series ${index + 1}`,
            data,
            fill: false,
            borderColor: `rgb(${index * 30}, ${index * 60}, ${index * 90})`, // Beispiel für Farbgebung
        })),
    };
}

export const transformRowsToDashboardPieChartData = (chartData) => {
    if (!chartData || !Array.isArray(chartData.gridData) || chartData.gridData.length < 2) {
        console.error('Ungültige Daten für die Pie-Chart-Transformation');
        return {labels: [], datasets: []};
    }

    const labels = chartData.gridData[0].cells.slice(1).map(cell => cell.text);
    const data = chartData.gridData[1].cells.slice(1).map(cell => parseInt(cell.text, 10) || 0);

    return {
        labels,
        datasets: [{
            data,
            backgroundColor: [
                // Beispiel für Farbgebung, diese sollten entsprechend angepasst werden
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
            ],
        }],
    };
}
*/
