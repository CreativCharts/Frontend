import React, {useEffect} from "react";
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

export default function ReactGridTable() {
    const [rows, setRows] = React.useState(getRows());
    const [columns, setColumns] = React.useState(getColumns());
    const [headers, setHeaders] = React.useState(getHeaders());
    const [gridKey, setGridKey] = React.useState(0);

    const handleRowsChange = (changes) => {
        console.log("Changes:", changes);

        const newRows = JSON.parse(JSON.stringify(rows));
        changes.forEach((change) => {
            const row = newRows.find(row => row.rowId === change.rowId);
            if (row) {
                // newRows[rowIndex] = {
                //     ...newRows[rowIndex],
                //     cells: change.cells.map(cell => ({...cell, readOnly: false}))
                // };
                const cell = row.cells.find((cell, i) => `col${i}` === change.columnId);
                if (cell) {
                    cell.text = change.newCell.text;
                }
            }
        });

        setRows(newRows);
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
                    setGridKey(prevKey => prevKey + 1);  // Neu hinzugefügt
                }
            } catch (error) {
                console.error("Error reading Excel file:", error);
            }
        }
    };


    return (
        <div className="react-grid-container">
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


