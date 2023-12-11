import {PieChart} from '@mui/x-charts/PieChart';
import {transformRowsToPieChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";
import * as Proptypes from "prop-types";

export default function PieChartComponent({height, width}) {

    const {chartData} = useData();
    const transformedData = transformRowsToPieChartData(chartData, width, height);
    const margin = {
        left: 100,
        bottom: 0
    };

    return (
        <PieChart
            {...transformedData}
            margin={margin}
            height={height}
            width={width}
        />
    );
}

PieChartComponent.propTypes = {
    height: Proptypes.number.isRequired,
    width: Proptypes.number.isRequired
}
