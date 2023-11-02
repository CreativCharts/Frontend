import {useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import BarChartComponent from '../charts/bar/BarChart.jsx';
import LineChartComponent from './line/LineChartComponent.jsx';
import PieChartComponent from '../charts/pie/PieChart.jsx';


const ChartDisplay = () => {
    const [chartType, setChartType] = useState('line');

    const handleChange = (event) => {
        setChartType(event.target.value);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {chartType === 'bar' && <BarChartComponent/>}
            {chartType === 'line' && <LineChartComponent/>}
            {chartType === 'pie' && <PieChartComponent/>}
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
