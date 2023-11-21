import BarChartComponent from '../charts/bar/BarChart.jsx';
import LineChartComponent from '../charts/line/LineChart.jsx';
import PieChartComponent from '../charts/pie/PieChart.jsx';
import {useData} from "../context/dataContext/UseData.jsx";
import './ChartDisplay.css';

const ChartDisplay = () => {
    const {chartType} = useData();
    const height = 200;
    const width = 300;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div style={{width: '100%', flexGrow: 1}}>
                {chartType === 'bar' && <BarChartComponent/>}
                {chartType === 'line' && <LineChartComponent/>}
                {chartType === 'pie' && <PieChartComponent
                    height={height}
                    width={width}
                />
                }
            </div>
        </div>
    );
}

export default ChartDisplay;
