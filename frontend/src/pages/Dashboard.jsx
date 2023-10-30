import React, {useEffect, useState} from 'react';
import {
    Container,
    Typography,
    Alert,
    CircularProgress,
    Card,
    CardContent,
    CardHeader,
    Grid,
} from '@mui/material';
import ChartDisplay from '../components/charts/ChartDisplay';
import {fetchCharts} from '../api/api';

export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await fetchCharts();
            if (error) {
                setError(error);
            } else {
                setCharts(data);
            }
            setLoading(false);
        };
        fetchData();
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
                {charts.filter(chart => chart?.data?.length).map((chart, index) => (
                    <Grid item xs={12} key={chart.id || index}>
                        <Card>
                            <CardHeader title={chart.name} subheader={chart.description}/>
                            <CardContent>
                                <ChartDisplay chartData={chart} isEditor={false}/>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
