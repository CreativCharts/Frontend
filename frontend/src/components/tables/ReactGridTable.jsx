import React, {useEffect, useState} from "react";
import {saveChart} from "../../api/api.js";
import {ReactGrid} from "@silevis/reactgrid";
import ExcelReader from "../excel/ExcelReader.jsx";
import {useData} from "../context/dataContext/UseData.jsx";
import OptionsDrawer from "../drawer/OptionsDrawer/OptionsDrawer.jsx";
import {Box} from "@mui/material";
import UploadButtonComponent from "../../components/buttons/UploadButtonComponent.jsx";
import SettingsButtonComponent from "../../components/buttons/SettingsButtonComponent.jsx";
import {
    getHeaders,
    getColumns,
    getRows,
    getHeadersFromData,
    getRowsFromData,
    getColumnsFromData
} from './ReactGridTableUtils';
import './ReactGridTable.css';
import {useDarkMode} from "../context/darkModeContext/DarkModeContext.jsx";


export default function ReactGridTable() {
    const [rows, setRows] = useState(getRows());
    const [columns, setColumns] = useState(getColumns());
    const [headers, setHeaders] = useState(getHeaders());
    const [gridKey, setGridKey] = useState(0);
    const {darkMode} = useDarkMode();


    const {
        chartId,
        chartData,
        chartType,
        chartTitle,
        chartDescription,
        setChartData,
        setChartType,
        setChartTitle,
        setChartDescription,
        setChartId

    } = useData();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const saveToDatabase = async () => {
        const dataToSave = {
            id: chartId,
            type: chartType,
            title: chartTitle,
            description: chartDescription,
            data: chartData,
        };

        console.log('Daten an den Server: ', dataToSave);
        await saveChart(dataToSave);
    };

    useEffect(() => {
        if (chartData !== rows) {
            setRows(chartData);
        }
    }, [chartData, rows]);


    const handleRowsChange = (changes) => {

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
        setChartData(newRows);
        console.log('New Rows:', newRows);
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

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box className={`react-grid-table-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Box
                className="file-settings-container">
                <UploadButtonComponent onChange={handleFileChange}/>
                <SettingsButtonComponent onClick={handleDrawerOpen}/>
            </Box>

            <OptionsDrawer
                open={drawerOpen}
                onClose={handleDrawerClose}
                setChartId={setChartId}
                setChartType={setChartType}
                chartType={chartType}
                chartTitle={chartTitle}
                setChartTitle={setChartTitle}
                chartDescription={chartDescription}
                setChartDescription={setChartDescription}
                saveToDatabase={saveToDatabase}
            />

            <ReactGrid
                key={gridKey}
                className={`react-grid ${darkMode ? 'dark-mode' : 'light-mode'}`}
                rows={rows}
                columns={columns}
                headers={headers}
                onCellsChanged={handleRowsChange}
            />
        </Box>
    );
}

