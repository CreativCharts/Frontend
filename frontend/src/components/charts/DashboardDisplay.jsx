import {useData} from './DataContext.jsx';
import ChartDisplay from './ChartDisplay.jsx';



export const DashboardDisplay = ({data}) => {
    const {setChartData, setChartType} = useData();

    setChartData(data.gridData);
    setChartType(data.type);


    return (
        <ChartDisplay className='chart-display'/>
    );
};





