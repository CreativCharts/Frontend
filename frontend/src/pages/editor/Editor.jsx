import {useEffect} from "react";
import ReactGridTable from '../../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../../components/displays/chartDisplay/ChartDisplay.jsx';
import {fetchChartById} from '../../api/api.js';
import {useData} from "../../components/context/dataContext/UseData.jsx";
import {useParams} from "react-router-dom";
import {getRows} from "../../components/tables/ReactGridTableUtils.jsx";
import {useDarkMode} from "../../components/context/darkModeContext/DarkModeContext.jsx";
import './Editor.css';

const Editor = () => {
    const {id} = useParams();
    const {darkMode} = useDarkMode();
    const {
        setChartData,
        setChartType,
        setChartTitle,
        setChartDescription,
        setChartId,
        chartData,
    } = useData();


    useEffect(() => {
        if (!id) {
            setChartData(getRows());
            setChartType('bar');
            setChartTitle('');
            setChartDescription('');
            setChartId('');
            return;
        }

        const fetchData = async () => {
            const data = await fetchChartById(id);
            setChartData(data.data.gridData);
            setChartType(data.data.type);
            setChartTitle(data.data.title || '');
            setChartDescription(data.data.description || '');
            setChartId(data.data._id);
        };
        fetchData();
    }, [id, setChartData, setChartType, setChartTitle, setChartDescription, setChartId]);

    return (
            <div className={`editor-root ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className='editor-container'>
                    <ChartDisplay
                            className="chart-area"
                            chartData={chartData}
                            isEditor={true}/>
                    <div>
                        <ReactGridTable
                                className={`table-area ${darkMode ? 'dark-mode' : 'light-mode'}`}
                                key={id}
                        />
                    </div>
                </div>
            </div>
    );
};

export default Editor;
