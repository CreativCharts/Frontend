import axios from 'axios';

const API_URL = 'http://localhost:5030/dashboard';
const ENDPOINTS = {CREATE_CHART: '/create-chart', ALL_CHARTS: '/allCharts'};

// chartData als Parameter hinzugefügt
export const saveChart = async (chartData) => {
    try {
        const response = await axios.post(`${API_URL}${ENDPOINTS.CREATE_CHART}`, chartData);
        console.log("Successfully sent chartData to backend:", chartData);
        return response.data;
    } catch (error) {
        console.error("Error in sending chartData to backend:", error);
        throw error;
    }
};

export const fetchCharts = async () => {
    try {
        const response = await axios.get(`${API_URL}${ENDPOINTS.ALL_CHARTS}`);
        return {data: response.data, error: null};
    } catch (error) {
        console.error("Error in fetching charts from backend:", error);
        return {data: null, error: error.message || "An error occurred"};
    }
};

export const saveChartDataToServer = async (data) => {
    try {
        const response = await axios.post(`${API_URL}${ENDPOINTS.CREATE_CHART}`, data);
        return response.data;
    } catch (error) {
        console.error("Error in sending chartData to backend:", error);
        throw error;
    }
};
