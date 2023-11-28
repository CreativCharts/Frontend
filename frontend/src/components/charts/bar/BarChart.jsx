import {BarChart} from '@mui/x-charts/BarChart';
import {transformRowsToBarChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";


export default function BarChartComponent(margins) {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);
    console.log('BAR CHART', transformedData);

    return (
        <BarChart
            {...transformedData}
            margins={margins}
        />
    );
}
