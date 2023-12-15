import {useEffect, useRef, useState} from "react";
import BarChartComponent from '../../charts/bar/BarChart.jsx';
import LineChartComponent from '../../charts/line/LineChart.jsx';
import PieChartComponent from '../../charts/pie/PieChart.jsx';
import {useData} from "../../context/dataContext/UseData.jsx";
import {useDarkMode} from "../../context/darkModeContext/DarkModeContext.jsx";
import './ChartDisplay.css';

const ChartDisplay = ({chartData}) => {

    const {chartType, margins} = useData();
    const {darkMode} = useDarkMode();
    const chartContainerEl = useRef(null);
    const [containerSize, setContainerSize] = useState({width: '100%', height: '100%'});

    const updateContainerSize = () => {
        if (chartContainerEl.current) {
            setContainerSize({
                width: chartContainerEl.current.clientWidth || 100,
                height: chartContainerEl.current.clientHeight || 100,
            });
        }
    };
    useEffect(() => {
        updateContainerSize();
        window.addEventListener('resize', updateContainerSize);
        return () => {
            window.removeEventListener('resize', updateContainerSize);
        };
    }, [chartData]);

    useEffect(() => {
        updateContainerSize();
        window.addEventListener('resize', updateContainerSize);
        return () => {
            window.removeEventListener('resize', updateContainerSize);
        };
    }, []);

    return (
            <div className={`chart-container ${darkMode ? 'dark-mode' : 'light-mode'}`}
                 ref={chartContainerEl}
            >
                {chartType === 'bar' && <BarChartComponent margins={margins}/>}
                {chartType === 'line' && <LineChartComponent margins={margins}/>}
                {chartType === 'pie' && <PieChartComponent
                        width={containerSize.width}
                        height={containerSize.height}
                        margins={margins}
                />
                }
            </div>
    );
}

ChartDisplay.defaultProps = {
    isEditor: false
}

export default ChartDisplay;
