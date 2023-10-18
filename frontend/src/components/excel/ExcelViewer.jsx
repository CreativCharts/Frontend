import {useCallback, useState} from "react";
import ExcelReader from "./ExcelReader.jsx";
import PropTypes from "prop-types";
import ChartDisplay from "../charts/ChartDisplay.jsx";

const ExcelViewer = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState(null);
    const [setTableData] = useState(null);

    const updateTableData = useCallback((newData) => {
        setTableData(newData);
        // Trigger chart update based on table data
        updateChartData(newData);
    }, [setTableData, updateChartData]);

    const updateChartData = useCallback((newData) => {
        // Update chart based on table data
        setChartData(newData.slice(0, 10));
    }, []);

    const handleFileChange = useCallback((e) => {
        setFile(e.target.files[0]);
    }, []);

    const handleDataFetch = useCallback(async () => {
        try {
            if (file) {
                const readData = await ExcelReader.readExcel(file);
                setData(readData);
                setChartData(readData.slice(0, 10));
                updateTableData(readData);
            }
        } catch (error) {
            console.error("Error reading Excel file:", error);
        }
    }, [file, updateTableData]);

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleDataFetch}>Load Data</button>
            {Array.isArray(data) && data.length > 0 ? (
                <div>
                    <ChartDisplay data={chartData}/>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

ExcelViewer.propTypes = {
    file: PropTypes.object,
    data: PropTypes.array,
};

export default ExcelViewer;
