import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveChart, updateChart } from '../../api/api';
import { useData } from "../context/dataContext/UseData.jsx";
import { Button, Container } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const SaveButtonComponent = ({ onSave }) => {
    const { chartId, chartType, chartTitle, chartDescription, chartData } = useData();
    const navigate = useNavigate();

    const handleSave = async () => {
        const dataToSave = {
            _id: chartId,
            type: chartType,
            title: chartTitle,
            description: chartDescription,
            gridData: chartData
        };

        try {
            let savedChart;
            if (chartId) {
                await updateChart(dataToSave);
            } else {
                savedChart = await saveChart(dataToSave);
                navigate(`/editor/${savedChart.data._id}`);
            }
            onSave(true, "Der Chart wurde erfolgreich gespeichert.");
        } catch (error) {
            console.error('Error saving chart:', error);
            onSave(false, "Fehler beim Speichern des Charts.");
        }
    };

    return (
        <Container>
            <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
            >
                Speichern
            </Button>
        </Container>
    );
}

export default SaveButtonComponent;
