import ChartDisplay from './ChartDisplay.jsx';
import {useData} from "../context/dataContext/UseData.jsx";
import PropTypes from "prop-types";
import {useEffect} from "react";


export const DashboardDisplay = ({data}) => {
    const {setChartData, setChartType, setChartId} = useData();

    useEffect(() => {
        if (data) {
            setChartData(data.gridData);
            setChartType(data.type);
            setChartId(data.id);
        }
    }, [data, setChartData, setChartType, setChartId]);


    return (
        <ChartDisplay className='chart-display'/>
    );
};

DashboardDisplay.propTypes = {
    data: PropTypes.object.isRequired,
};
