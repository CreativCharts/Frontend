import {useEffect} from "react";
import ReactGridTable from '../../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../../components/displays/chartDisplay/ChartDisplay.jsx';
import {fetchChartById} from '../../api/api.js';
import {useData} from "../../components/context/dataContext/UseData.jsx";
import {useParams} from "react-router-dom";
import {getRows} from "../../components/tables/ReactGridTableUtils.jsx";
import {useDarkMode} from "../../components/context/darkModeContext/DarkModeContext.jsx";

const Editor = () => {
    const {id} = useParams();
    const {darkMode} = useDarkMode();
    const {
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

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 130px)' }}>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: darkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)',
                borderRight: '1px solid var(--border-color-light)',
                height: 'fit-content'
            }}>
            </div>

            <div style={{ flex: 1, padding: '10px', height: '100%' }}>
                <ChartDisplay isEditor={true} />
                <ReactGridTable />
            </div>
        </div>
    );
};

export default Editor;
