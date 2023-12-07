import {LineChart} from '@mui/x-charts/LineChart';
import {transformRowsToLineChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";
import {MarginDrawer} from "../../drawer/marginDrawer/MarginDrawer.jsx";

export default function LineChartComponent(margin) {
    const {chartData} = useData();

    const transformedData =
        transformRowsToLineChartData(chartData);

    const chartMargin = MarginDrawer(margin);
    console.log('margin', chartMargin);
    return (
        <LineChart
            {...transformedData}
            {...chartMargin.margin}
        />
    );
}
