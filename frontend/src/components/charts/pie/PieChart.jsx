import {useData} from '../DataContext';
import {PieChart} from '@mui/x-charts/PieChart';
import {transformRowsToPieChartData} from './settings/pieTransformer.js';

export default function PieChartComponent() {

    const {chartData} = useData();
    const transformedData =
        transformRowsToPieChartData(chartData);

    return (
        <PieChart
            {...transformedData}
        />
    );
}
