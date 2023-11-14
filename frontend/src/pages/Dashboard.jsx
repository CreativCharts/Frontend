import {useState, useEffect} from 'react';
import {CircularProgress, Container, Grid, Alert} from '@mui/material';
import ChartCard from '../components/cards/ChartCard';
import DashBarChart from "../components/charts/bar/DashBarChart.jsx";
import DashLineChart from "../components/charts/line/DashLineChart.jsx";
import DashPieChart from "../components/charts/pie/DashPieChart.jsx";
import {transformDashBar} from '../components/charts/bar/settings/barTransformer';
import {transformDashLine} from '../components/charts/line/settings/lineTransformer';
import {transformDashPie} from '../components/charts/pie/settings/pieTransformer';
import {fetchAll} from '../api/api.js';


export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAll().then(response => {
            if (response.data && Array.isArray(response.data)) {
                console.log('response', response.data);
                setCharts(response.data.map(chart => {
                    switch (chart.type) {
                        case 'pie':
                            return {...chart, data: transformDashPie(chart.gridData)};
                        case 'line':
                            return {...chart, data: transformDashLine(chart.gridData)};
                        case 'bar':
                            return {...chart, data: transformDashBar(chart.gridData)};
                        default:
                            throw new Error('Unknown chart type');
                    }
                }));
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
            setError(error.toString());
        });
    }, []);


    const renderChartComponent = (charts) => {
        switch (charts.type) {
            case 'pie':
                return <DashPieChart data={charts.data} series={charts.series}/>;
            case 'line':
                return <DashLineChart data={charts.data} series={charts.series}/>;
            case 'bar':
                return <DashBarChart data={charts.data} series={charts.series}/>;
            default:
                throw new Error('Unknown chart type');
        }
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
