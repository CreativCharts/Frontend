import ChartDisplay from '../chartDisplay/ChartDisplay.jsx';
import {useData} from "../../context/dataContext/UseData.jsx";
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
        <ChartDisplay className='chart-display'
                      isEditor={false}
                      height={'calc(100vh - 64px)'}
                      margins={{
                          top: 10,
                          right: 10,
                          bottom: 10,
                          left: 10,
                      }}

        />
    );
};

DashboardDisplay.propTypes = {
    data: PropTypes.object.isRequired,
};

