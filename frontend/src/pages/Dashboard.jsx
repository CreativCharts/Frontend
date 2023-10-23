import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ChartDisplay from '../components/charts/ChartDisplay';
import {Container, Grid, Paper, Typography, Alert, CircularProgress, CardContent, CardHeader} from '@mui/material';

const API_URL = 'http://localhost:5030/dashboard';

export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCharts = async () => {
        try {
            const response = await axios.get(API_URL);
            const {data} = response;
            if (Array.isArray(data)) {
                setCharts(data);
            } else {
                setError('Die Antwort vom Server ist nicht korrekt formatiert.');
            }
        } catch (err) {
            console.error('Error fetching charts:', err);
            setError('Ein Fehler ist beim Abrufen der Diagramme aufgetreten.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharts();
    }, []);

    if (loading) {
        return <CircularProgress/>;
    }

    return (
        <Container sx={{padding: '20px'}}>
            <Typography variant="h4" sx={{marginBottom: '20px'}}>
                Dashboard
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Grid container spacing={3}>
                {charts.filter(chart => chart?.data?.length).map(chart => (
                    <Grid item xs={12} sm={6} md={4} key={chart.id || chart.name}>
                        <CardHeader title={chart.name}
                                    subheader={chart.description}/>
                        <CardContent>
                            <ChartDisplay chartData={chart}/>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

