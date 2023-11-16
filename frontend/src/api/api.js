import axios from 'axios';
import {API_BASE_URL, API_ENDPOINTS} from './apiSettings';

export const landingpage = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}${API_ENDPOINTS.landingPage}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching landingpage:", error);
    }
}

export const saveChart = async (chartData) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}${API_ENDPOINTS.createChart}`, chartData);

        if (response.data) {
            console.log("Chart saved:", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: {}, error: 'Ungültiges Datenformat'};
        }

    } catch (error) {

        console.error('Fehler beim Speichern der Daten:', error);
        return {data: {}, error: error.message};
    }
}

export const fetchAll = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}${API_ENDPOINTS.fetchAll}`);

        if (response.data && Array.isArray(response.data)) {

            console.log("Fetch all aus DB: ", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: [], error: 'Ungültiges Datenformat'};
        }

    } catch (error) {

        console.error('Fehler beim Abrufen der Daten:', error);
        return {data: [], error: error.message};
    }
};

export const fetchChartById = async (chartId) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}${API_ENDPOINTS.fetchChartById
                .replace(':id', chartId)}`);

        if (response.data) {
            console.log("Fetch by ID aus DB: ", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: {}, error: 'Ungültiges Datenformat'};
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        return {data: {}, error: error.message};
    }
}

export const updateChart = async (chart) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}${API_ENDPOINTS.updateChart.replace(
                ':id', chart._id)}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(chart)
            });
        return response.json();

    } catch (error) {
        console.error("Error updating chart:", error);
    }
};
