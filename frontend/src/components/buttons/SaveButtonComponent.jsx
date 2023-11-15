import {saveChart, updateChart} from '../../api/api';
import {useData} from "../../context/UseData.jsx";

const SaveButtonComponent = () => {
    const {chartData, chartType, chartId} = useData();


    const saveToDatabase = async () => {
        const dataToSave = {_id: chartId, type: chartType, gridData: chartData};


        try {
            if (chartId) {
                await updateChart(dataToSave);
            } else {
                await saveChart(dataToSave);
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
