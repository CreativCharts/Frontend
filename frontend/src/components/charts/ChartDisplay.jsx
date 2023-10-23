import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import BarChart from '../charts/bar/BarChart.jsx';
import LineChart from '../charts/line/LineChart.jsx';
import ParentComponent from "./bar/ParentComponent.jsx";



const ChartDisplay = () => {
    const [chartType, setChartType] = useState('bar');


    const handleChange = (event) => {
        setChartType(event.target.value);
    };


    return (
        <div>
            {chartType === 'bar' && <><h1>Bar Chart</h1><BarChart /></>}
            {chartType === 'line' && <><h1>Line Chart</h1><LineChart/></>}
            {chartType === 'pie' && <><h1>Pie Chart</h1></>}
            <FormControl>
                <InputLabel id="chart-type-label">Chart Type</InputLabel>
                <Select
                    labelId="chart-type-label"
                    id="chart-type-select"
                    value={chartType}
                    label="Chart Type"
                    onChange={handleChange}
                >
                    <MenuItem value="bar">Bar Chart</MenuItem>
                    <MenuItem value="line">Line Chart</MenuItem>
                    <MenuItem value="pie">Pie Chart</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default ChartDisplay;
