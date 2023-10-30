import React, {useState} from "react";
import {ReactGrid} from "@silevis/reactgrid";
import ExcelReader from "../excel/ExcelReader.jsx";
import '../styles/ReactGridTable.css';
import {
    getHeaders,
    getColumns,
    getRows,
    getHeadersFromData,
    getRowsFromData,
    getColumnsFromData
} from './ReactGridTableUtils';
import {useData} from '../charts/DataContext.jsx';
import {saveChartDataToServer} from "../../api/api.js";
import {convertTableToChartData} from "../../data/chartData.js";

export default function ReactGridTable() {
    const [rows, setRows] = React.useState(getRows());
    const [columns, setColumns] = React.useState(getColumns());
    const [headers, setHeaders] = React.useState(getHeaders());
    const [gridKey, setGridKey] = React.useState(0);
    const {setChartData} = useData();
    const [selectedChartType, setSelectedChartType] = useState('line');


    const handleRowsChange = async (changes) => {

        console.log('changes', changes, rows);
        const newRows = JSON.parse(JSON.stringify(rows));
        changes.forEach((change) => {
            const row = newRows.find(row => row.rowId === change.rowId);
            if (row) {
                const cell = row.cells.find((_, i) => `col${i + 1}` === change.columnId);
                row.cells.forEach((_, i) => {
                    console.log(`col${i + 1}`, change.columnId);
                });
                if (cell) {
                    cell.text = change.newCell.text;
                }
            }
        });

        setRows(newRows);
        const newChartData = convertTableToChartData(newRows, selectedChartType);
        setChartData(newRows, newChartData);
        console.log('New ChartData:', newChartData);
        try {
            await saveChartDataToServer(newChartData);
        } catch (error) {
            console.error("Failed to save chart data:", error);
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const readData = await ExcelReader.readExcel(file);
                if (readData && readData.length > 0) {
                    setRows(getRowsFromData(readData));
                    setColumns(getColumnsFromData(readData));
                    setHeaders(getHeadersFromData(readData));
                    setGridKey(prevKey => prevKey + 1);
                }
            } catch (error) {
                console.error("Error reading Excel file:", error);
            }
        }
    };


    return (
        <div className="react-grid-container" style={{backgroundColor: "darkgrey"}}>
            <input type="file" onChange={handleFileChange}/>
            <ReactGrid
                key={gridKey}
                className="react-grid"
                rows={rows}
                columns={columns}
                headers={headers}
                onCellsChanged={handleRowsChange}
            />
        </div>
    );
}
