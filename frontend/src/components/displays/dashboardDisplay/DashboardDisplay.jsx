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

        />
    );
}

DashboardDisplay.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        type: PropTypes.string,
        gridData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.string,
            y: PropTypes.number,
        }))),
    }),
};
