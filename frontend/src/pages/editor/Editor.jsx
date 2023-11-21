import {useEffect} from "react";
import ReactGridTable from '../../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../../components/chartDisplays/ChartDisplay.jsx';
import {saveChart, fetchChartById} from '../../api/api.js';
import {useData} from "../../components/context/dataContext/UseData.jsx";
import {useParams} from "react-router-dom";
import {getRows} from "../../components/tables/ReactGridTableUtils.jsx";
import {useDarkMode} from "../../components/context/darkModeContext/DarkModeContext.jsx";
import SettingsDrawer from "../../components/drawer/SettingsDrawer.jsx";
import './Editor.css';

const Editor = () => {
    const {darkMode} = useDarkMode();

    const editorStyles = {
        backgroundColor: darkMode ? '#303030' : '#fff',
        color: darkMode ? '#fff' : '#303030'
    }
    const {id} = useParams();
    const {
        chartId,
        chartData,
        chartType,
        chartTitle,
        chartDescription,
        setChartData,
        setChartType,
        setChartTitle,
        setChartDescription,
        setChartId
    } = useData();

    useEffect(() => {
        if (!id) {
            setChartData(getRows());
            setChartType('bar');
            setChartTitle('');
            setChartDescription('');
            setChartId(null);
            return;
        }

        const fetchData = async () => {
            const data = await fetchChartById(id);
            console.log('GOT DATA', data.description);
            setChartData(data.data.gridData);
            setChartType(data.data.type);
            setChartTitle(data.data.title || '');
            setChartDescription(data.data.description || '');
            setChartId(data.data._id);
        };
        fetchData();
    }, [id, setChartData, setChartType, setChartTitle, setChartDescription, setChartId]);

    const saveToDatabase = async () => {
        const dataToSave = {
            id: chartId,
            type: chartType,
            title: chartTitle,
            description: chartDescription,
            data: chartData,
        };

        console.log('Daten an den Server: ', dataToSave);
        await saveChart(dataToSave);
    };

    return (
        <div className="editor-root" style={editorStyles}>
            <div className="chart-area" style={editorStyles}>

                <ChartDisplay isEditor={true}/>
            </div>
            <div className="form-container">
                <SettingsDrawer
                    chartTitle={chartTitle}
                    setChartTitle={setChartTitle}
                    chartDescription={chartDescription}
                    setChartDescription={setChartDescription}
                    chartType={chartType}
                    setChartType={setChartType}
                    saveToDatabase={saveToDatabase}
                />

                <div className="table-area"
                     style={{
                         borderColor:
                                darkMode ? '#fff' : '#303030',
                     }}>
                    <ReactGridTable/>
                </div>
            </div>
        </div>
    );
}


export default Editor;
