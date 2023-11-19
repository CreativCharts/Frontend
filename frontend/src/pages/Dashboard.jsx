import React, {useState, useEffect} from 'react';
import {CircularProgress, Container, Grid, Alert} from '@mui/material';
import ChartCard from '../components/cards/ChartCard';
import {DashboardDisplay} from "../components/charts/DashboardDisplay.jsx";
import {fetchAll, deleteChart} from '../api/api.js';
import {DataProvider} from "../context/ProviderValue.jsx";
import PaginationComponent from "../components/pagination/PaginationComponent.jsx";
import ConfirmDialog from '../components/dialogs/ConfirmDialog.jsx';

export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedChartId, setSelectedChartId] = useState(null);

    const fetchUpdatedCharts = () => {
        fetchAll(currentPage, 12).then(response => {
            if (response.charts && Array.isArray(response.charts)) {
                setCharts(response.charts);
                setTotalPages(response.totalPages);
            }
        }).catch(error => {
            setError(error.message);
        });
    };

    useEffect(() => {
        fetchUpdatedCharts();
    }, [currentPage]);

    const handleDeleteConfirm = (chartId) => {
        setSelectedChartId(chartId);
        setConfirmDialogOpen(true);
    };

    const handleDeleteCancel = () => {
        setConfirmDialogOpen(false);
        setSelectedChartId(null);
    };

    const handleDelete = () => {
        if (selectedChartId) {
            deleteChart(selectedChartId).then(() => {
                fetchUpdatedCharts();
            }).catch(error => {
                setError(error.message);
            });
        }
        setConfirmDialogOpen(false);
        setSelectedChartId(null);
    };

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            {error && <Alert severity="error">{error}</Alert>}
            {charts.length === 0 && !error && <CircularProgress/>}
            {charts.length > 0 && (
                <>
                    <Grid container spacing={3}>
                        {charts.map((chart) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={chart._id}>
                                <ChartCard
                                    id={chart._id.toString()}
                                    title={chart.title}
                                    description={chart.description}
                                    onDelete={() => handleDeleteConfirm(chart._id)}
                                >
                                    <DataProvider>
                                        <DashboardDisplay data={chart}/>
                                    </DataProvider>
                                </ChartCard>
                            </Grid>
                        ))}
                    </Grid>
                    {totalPages > 0 && (
                        <PaginationComponent
                            total={totalPages}
                            page={currentPage}
                            onChange={(event, newPage) => setCurrentPage(newPage)}
                        />
                    )}
                </>
            )}

            <ConfirmDialog
                open={confirmDialogOpen}
                title="Chart löschen"
                message="Möchten Sie dieses Chart wirklich löschen?"
                onClose={handleDeleteCancel}
                onConfirm={handleDelete}
            />
        </Container>
    );
}
