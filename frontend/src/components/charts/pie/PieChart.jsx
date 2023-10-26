import {useData} from '../DataContext';
import {PieChart} from '@mui/x-charts/PieChart';
import {chartSetting, transformRowsToPieChartData} from './chartSetting';

export default function PieChartComponent() {
    const {chartData} = useData();
    const transformedData = transformRowsToPieChartData(chartData);

    return (
        <PieChart
            // dataset={transformedData.series[0].data}
            {...chartSetting}
            series={transformedData.series}
        />
    );
}
