import {saveChart, updateChart} from '../../api/api';
import {useData} from "../context/dataContext/UseData.jsx";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const SaveButtonComponent = () => {
    const {chartId, chartType, chartTitle, chartDescription, chartData} = useData();
    const navigate = useNavigate();


    const saveToDatabase = async () => {
        const dataToSave = {
            _id: chartId,
            type: chartType,
            title: chartTitle,
            description: chartDescription,
            gridData: chartData
        };

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
        <Button
            variant="contained"
            color="primary"
            onClick={saveToDatabase}>
            Speichern
        </Button>
    );
}

export default SaveButtonComponent;
