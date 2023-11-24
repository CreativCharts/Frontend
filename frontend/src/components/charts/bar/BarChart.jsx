import {BarChart} from '@mui/x-charts/BarChart';
import {transformRowsToBarChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";


export default function BarChartComponent(margin) {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);

    return (
        <BarChart
            {...transformedData}
            margin={margin}
        />
    );
}
