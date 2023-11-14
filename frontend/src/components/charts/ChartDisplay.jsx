import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import BarChartComponent from '../charts/bar/BarChart.jsx';
import LineChartComponent from '../charts/line/LineChart.jsx';
import PieChartComponent from '../charts/pie/PieChart.jsx';
import {useData} from './DataContext.jsx';
import {useEffect, useState} from "react";


const ChartDisplay = () => {
    const {chartType: contextChartType, setChartType: setContextChartType} = useData();
    const [chartType, setChartType] = useState(contextChartType);


    useEffect(() => {
        try {
            setContextChartType(chartType);
        } catch (error) {
            console.error('Error setting chart type:', error);

        }
    }, [chartType, setContextChartType]);

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
                    onChange={(event) => setChartType(event.target.value)}
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
