import {BarChart} from '@mui/x-charts/BarChart';
import {useData} from "../DataContext";
import {transformRowsToBarChartData} from './settings/barTransformer.js';
// import {chartSetting} from "../line/settings/chartSetting.js";


export default function BarChartComponent() {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);

    return (
        <BarChart
            {...transformedData}
        />
    );
}
