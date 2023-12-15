import axios from 'axios';
import {API_BASE_URL, API_ENDPOINTS} from './apiSettings';

export const register = async (user) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}${API_ENDPOINTS.register}`, user);

        if (response.data) {
            console.log("User registered:", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: {}, error: 'Ungültiges Datenformat'};
        }

    } catch (error) {

        console.error('Fehler beim Registrieren:', error);
        return {data: {}, error: error.message};
    }
}

export const login = async (user) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}${API_ENDPOINTS.login}`, user);

        if (response.data) {
            console.log("User logged in:", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: {}, error: 'Ungültiges Datenformat'};
        }

    } catch (error) {

        console.error('Fehler beim Einloggen:', error);
        return {data: {}, error: error.message};
    }
}

export const home = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}${API_ENDPOINTS.home}`);
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

export const fetchAll = async (
    page = 1,
    pageSize = 12) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.fetchAll}`, {
            params: {page, pageSize}
        });
        return response.data;
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
        const response = await axios.put(
            `${API_BASE_URL}${API_ENDPOINTS.updateChart.replace(
                ':id', chart._id)}`,
            chart
        );
        console.log("Chart updated:", response.data);
        return {data: response.data};
    } catch (error) {
        console.error("Error updating chart:", error);
        return {data: {}, error: error.message};
    }
};

export const deleteChart = async (chartId) => {
    try {
        const response = await axios.delete(
            `${API_BASE_URL}${API_ENDPOINTS.deleteChart.replace(
                ':id', chartId)}`);

        console.log("Chart deleted:", response.data);
        return {data: response.data};
    } catch (error) {
        console.error("Error deleting chart:", error);
        return {data: {}, error: error.message};
    }
};
