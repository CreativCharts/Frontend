import {saveChart, updateChart} from '../../api/api';
import {useData} from "../../context/UseData.jsx";
import {useNavigate} from "react-router-dom";

const SaveButtonComponent = () => {
    const {chartData, chartType, chartId} = useData();
    const navigate = useNavigate();


    const saveToDatabase = async () => {
        const dataToSave = {_id: chartId, type: chartType, gridData: chartData};


        try {
            if (chartId) {
                await updateChart(dataToSave);
            } else {
                const chart = await saveChart(dataToSave);
                console.log('Chart saved:', chart);
                navigate(`/editor/${chart.data._id}`);

            }
        } catch (error) {
            console.error('Error saving chart:', error);
        }
    };

    return (
        <button onClick={saveToDatabase}>Save</button>
    );
}

export default SaveButtonComponent;
