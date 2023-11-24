import {useEffect, useRef, useState} from "react";
import BarChartComponent from '../../charts/bar/BarChart.jsx';
import LineChartComponent from '../../charts/line/LineChart.jsx';
import PieChartComponent from '../../charts/pie/PieChart.jsx';
import {useData} from "../../context/dataContext/UseData.jsx";
import {useDarkMode} from "../../context/darkModeContext/DarkModeContext.jsx";


const ChartDisplay = () => {
    const {chartType, margins} = useData();
    const {darkMode} = useDarkMode();
    const chartContainerEl = useRef(null);
    const [containerSize, setContainerSize] = useState({width: 100, height: 100});

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
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div className={`chart-container ${darkMode ? 'dark-mode' : 'light-mode'}`}
                 style={{width: '100%', flexGrow: 1}}
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
        </div>
    );
}

ChartDisplay.defaultProps = {
    isEditor: false
}

export default ChartDisplay;
