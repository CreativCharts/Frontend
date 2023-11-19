import {useRef} from "react";
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import BarChartComponent from '../charts/bar/BarChart.jsx';
import LineChartComponent from '../charts/line/LineChart.jsx';

import PieChartComponent from '../charts/pie/PieChart.jsx';
import {useData} from "../../context/UseData.jsx";


const ChartDisplay = ({isEditor}) => {
    const {chartType, setChartType} = useData();
    const chartContainerEl = useRef(null);

    console.log('ChartDisplay chartType geändert: ', chartType);

    const containerWidth = chartContainerEl.current?.clientWidth || 100;
    const containerHeight = chartContainerEl.current?.clientHeight || 100;

    return (
        
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div
                style={{width: '100%', flexGrow: 1}}
                ref={chartContainerEl}
            >
                {chartType === 'bar' && <BarChartComponent/>}
                {chartType === 'line' && <LineChartComponent/>}
                {chartType === 'pie' && <PieChartComponent width={containerWidth} height={containerHeight}/>}
            </div>
            {isEditor && <FormControl>
                <InputLabel id="chart-type-label">Chart Type</InputLabel>
                <Select
                    labelId="chart-type-label"
                    id="chart-type-select"
                    value={chartType}
                    label="Chart Type"
                    onChange={(
                        event) =>
                        setChartType(event.target.value)}
                >
                    <MenuItem value="bar">Bar Chart</MenuItem>
                    <MenuItem value="line">Line Chart</MenuItem>
                    <MenuItem value="pie">Pie Chart</MenuItem>
                </Select>
            </FormControl>}
        </div>
    );
}

ChartDisplay.defaultProps = {
    isEditor: false
}

export default ChartDisplay;
