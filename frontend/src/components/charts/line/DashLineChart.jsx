/*
import {LineChart} from '@mui/x-charts/LineChart';
import {useData} from "../DataContext.jsx";
// import {transformDashLine} from "./settings/lineTransformer.js";

export default function DashLineChart() {
    const {chartData} = useData();

    if (!chartData) {
        return <div>Loading...</div>;
    }


    const transformedData = transformDashLine(chartData);
    console.log('transformedData', transformedData);
    if (!transformedData.datasets || transformedData.datasets.length === 0) {
        return <div>Keine Daten für das LineChart verfügbar.</div>;
    }

    return (
        <LineChart
            series={transformedData.datasets}
            xAxis={{
                type: 'category',
                data: transformedData.labels
            }}
            yAxis={{}}
            {...transformedData}
        />
    );
}
*/
