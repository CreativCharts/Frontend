import {useState, useEffect, useCallback} from 'react';
import {CircularProgress, Container, Grid, Alert} from '@mui/material';
import ChartCard from '../../components/cards/ChartCard.jsx';
import {DashboardDisplay} from "../../components/displays/dashboardDisplay/DashboardDisplay.jsx";
import {fetchAll, deleteChart} from '../../api/api.js';
import PaginationComponent from "../../components/pagination/PaginationComponent.jsx";
import DeleteDialog from '../../components/dialogs/delete/DeleteDialog.jsx';
import {DataProvider} from "../../components/context/dataContext/ProviderValue.jsx";
import CreateButton from "../../components/buttons/CreateButton.jsx";
import AddchartIcon from "@mui/icons-material/Addchart";
import {useDarkMode} from "../../components/context/darkModeContext/DarkModeContext.jsx";
import './Dashboard.css';

export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedChartId, setSelectedChartId] = useState(null);
    const {darkMode} = useDarkMode();

    const itemsPerPage = 8;


    const fetchUpdatedCharts = useCallback(() => {
        fetchAll(currentPage, 8).then(response => {
            if (response.charts && Array.isArray(response.charts)) {
                setCharts(response.charts);
                setTotalPages(response.totalPages);
            }
        }).catch(error => {
            setError(error.message);
        });
    }, [currentPage]);

    useEffect(() => {
        fetchUpdatedCharts();
    }, [fetchUpdatedCharts]);

    const handleDeleteConfirm = (chartId) => {
        setSelectedChartId(chartId);
        setConfirmDialogOpen(true);
    };

    const handleDeleteCancel = () => {
        setConfirmDialogOpen(false);
        setSelectedChartId(null);
    };

    const handleDelete = () => {
        setConfirmDialogOpen(false);
        if (selectedChartId) {
            deleteChart(selectedChartId).then(() => {
                fetchUpdatedCharts();
            }).catch(error => {
                setError(error.message);
            });
        }
    }

    const renderPagination = () => {
        return totalPages > 0 && (
                <PaginationComponent
                        className="pagination-container-dashboard"
                        totalItems={totalPages * itemsPerPage}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={(event, value) => setCurrentPage(value)}
                        darkMode={darkMode}

                />
        );
    };


    return (
            <Container
                    className="dashboard-container"
            >
                {error && <Alert severity="error">{error}</Alert>}

                {charts.length === 0 && !error &&
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            zIndex: '999',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Optional, provides a semi-transparent background
                        }}>
                            <CircularProgress/>
                        </div>
                }
                {charts.length > 0 && (
                        <Grid container spacing={2}>
                            {charts.map((chart) => (
                                    <Grid item xs={12} sm={6} md={6} lg={6} key={chart._id}>
                                        <ChartCard
                                                id={chart._id.toString()}
                                                title={chart.title}
                                                onDelete={() => handleDeleteConfirm(chart._id)}
                                        >
                                            <DataProvider>
                                                <DashboardDisplay data={chart}/>
                                            </DataProvider>
                                        </ChartCard>
                                    </Grid>
                            ))}
                        </Grid>

                )}

                <div>
                    {renderPagination()}
                </div>

                <div className="create-button-container">
                    <CreateButton to="/editor" icon={<AddchartIcon/>}/>
                </div>
                <DeleteDialog
                        open={confirmDialogOpen}
                        title="Chart löschen"
                        message="Möchten Sie dieses Chart wirklich löschen?"
                        onClose={handleDeleteCancel}
                        onConfirm={handleDelete}
                />
            </Container>
    );
}
