export const convertTableToChartData = (tableData, selectedChartType) => {
    return {
        data: "data",
        type: selectedChartType,
        gridData: tableData.map((row, rowIndex) => ({
            rowId: `row${rowIndex + 1}`,
            cells: row.cells.map((cell, cellIndex) => ({
                type: "text",
                text: cell.text || "",
                className: `react-grid-cell react-grid-col${cellIndex + 1}-cell`,
            }))
        }))
    };
};
