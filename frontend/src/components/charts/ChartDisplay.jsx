import {useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import BarChart from '../charts/bar/BarChart.jsx';
import BasicArea from "../charts/line/LineChart.jsx";

const ChartDisplay = () => {
    const [chartType, setChartType] = useState('bar');

    const handleChange = (event) => {
        setChartType(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="chart-type-label">Chart Type</InputLabel>
                {chartType === 'bar' && <h1>Bar Chart</h1>}
                {chartType === 'line' && <h1>Line Chart</h1>}
                {chartType === 'pie' && <h1>Pie Chart</h1>}
                <Select
                    labelId="chart-type-label"
                    id="chart-type-select"
                    value={chartType}
                    label="Chart Type"
                    onChange={handleChange}
                >
                    <MenuItem value="bar">
                        <BarChart/>
                    </MenuItem>
                    <MenuItem value="line">
                        <BasicArea/>
                    </MenuItem>
                    <MenuItem value="pie">
                        Pie Chart
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}


export default ChartDisplay;
