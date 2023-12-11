import {BarChart} from '@mui/x-charts/BarChart';
import {transformRowsToBarChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";


export default function BarChartComponent() {
export default function BarChartComponent(margin) {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);
    console.log('BAR CHART', transformedData);

    return (
        <BarChart
            {...transformedData}
            margin={{bottom: 30, left: 100}}
        />
    );
}
