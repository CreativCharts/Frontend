import {useState} from "react";
import {BarChart} from '@mui/x-charts/BarChart';
import {axisClasses} from '@mui/x-charts';
import dataset from "./dataset.js";


const [setTableData, setChartData] = useState([dataset.values()]);


const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    width: 1280,
    height: 600,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(10px, 0)',
        },
    },
};
const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
    return (
        <BarChart
            dataset={dataset}
            data={setTableData}
            chartSetting={chartSetting}
            valueFormatter={valueFormatter}


            xAxis={[{scaleType: 'band', dataKey: ''}]}
            series={[
                {dataKey: '', label: '', valueFormatter},
                {dataKey: '', label: '', valueFormatter},
                {dataKey: '', label: '', valueFormatter},
                {dataKey: '', label: '', valueFormatter},
            ]}
            {...chartSetting}
        />
    );
}
