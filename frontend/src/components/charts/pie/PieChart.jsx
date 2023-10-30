import {useData} from '../DataContext';
import {PieChart} from '@mui/x-charts/PieChart';
import {chartSetting} from './settings/chartSetting';
import {transformRowsToPieChartData} from './settings/transformer.js'

export default function PieChartComponent() {
    const {chartData} = useData();
    const transformedData = transformRowsToPieChartData(chartData);

    return (
        <PieChart
            {...chartSetting}
            series={transformedData.series}
        />
    );
}
