export const API_BASE_URL = 'http://localhost:5030';


export const API_ENDPOINTS = {
    createChart: '/create-chart', 
    allCharts: '/all-charts', 
    deleteChart: '/delete-chart/:id',
    updateChart: '/update-chart/:id',
    export: '/export',
    import: '/import'
};


export const SWAGGER_URLS = {
    service1: 'http://localhost:3001/swagger/v1/swagger.json',
    service2: 'http://localhost:3002/swagger/v1/swagger.json'
};
