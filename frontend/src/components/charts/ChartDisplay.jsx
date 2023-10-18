import {useState} from 'react';

import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';

const ChartDisplay = () => {
    const [chartType, setChartType] = useState('bar');

    const handleChange = (event) => {
        setChartType(event.target.value);
    };

    return (
        <div>
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
            {chartType === 'bar' && <h1>Bar Chart</h1>}
            {chartType === 'line' && <h1>Line Chart</h1>}
            {chartType === 'pie' && <h1>Pie Chart</h1>}
        </div>
    );
}


export default ChartDisplay;
