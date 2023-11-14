import {useState, useEffect} from 'react';
import {DataProvider} from '../components/charts/DataContext.jsx';
import {CircularProgress, Container, Grid, Alert} from '@mui/material';
import ChartCard from '../components/cards/ChartCard';
import {DashboardDisplay} from "../components/charts/DashboardDisplay.jsx";
import {fetchAll} from '../api/api.js';


export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAll().then(response => {
            if (response.data && Array.isArray(response.data)) {
                console.log('response', response.data);
                setCharts(response.data);
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
            setError(error.toString());
        });
    }, []);


    const renderChartComponent = (charts) => {
        console.log('Charts', charts);
        return (
            <DataProvider>
                <DashboardDisplay data={charts}/>
            </DataProvider>
        )
    };

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            {error && <Alert severity="error">{error}</Alert>}
            {charts.length === 0 && !error && <CircularProgress/>}
            {charts.length > 0 && (
                <Grid container spacing={3}>
                    {charts.map((chart) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={chart._id}>
                            <ChartCard title={chart.title} subtitle={chart.subtitle}>
                                {renderChartComponent(chart)}
                            </ChartCard>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}
