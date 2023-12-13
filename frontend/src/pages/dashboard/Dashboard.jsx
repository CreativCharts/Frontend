import {useState, useEffect} from 'react';
import {CircularProgress, Container, Grid, Alert} from '@mui/material';
import ChartCard from '../../components/cards/ChartCard.jsx';
import {DashboardDisplay} from "../../components/displays/dashboardDisplay/DashboardDisplay.jsx";
import {fetchAll, deleteChart} from '../../api/api.js';
import PaginationComponent from "../../components/pagination/PaginationComponent.jsx";
import DeleteDialog from '../../components/dialogs/delete/DeleteDialog.jsx';
import {DataProvider} from "../../components/context/dataContext/ProviderValue.jsx";
import CreateButton from "../../components/buttons/CreateButton.jsx";
import AddchartIcon from "@mui/icons-material/Addchart";
import './Dashboard.css';


export default function Dashboard() {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedChartId, setSelectedChartId] = useState(null);


    const fetchUpdatedCharts = () => {
        fetchAll(currentPage, 8).then(response => {
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
        setConfirmDialogOpen(false);
        if (selectedChartId) {
            deleteChart(selectedChartId).then(() => {
                fetchUpdatedCharts();
            }).catch(error => {
                setError(error.message);
            });
        }
    }

    return (
        <Container className="dashboard-container">
            {error && <Alert severity="error">{error}</Alert>}
            {charts.length === 0 && !error && <CircularProgress/>}
            {charts.length > 0 && (
                <Grid container spacing={2} width={'100%'} height={'100%'} className='dashboard-grid-container'>
                    {charts.map((chart) => (
                        <Grid item xs={12} sm={6} md={6} lg={6} key={chart._id}>
                            <ChartCard
                                id={chart._id.toString()}
                                title={chart.title}
                                onDelete={() => handleDeleteConfirm(chart._id)}
                                className="chart-card"
                            >
                                <DataProvider>
                                    <DashboardDisplay data={chart}/>
                                </DataProvider>
                            </ChartCard>
                        </Grid>
                    ))}
                </Grid>
            )}
            <div className='create-button-fab'>
                <CreateButton

                    to="/editor"
                    icon={<AddchartIcon/>}
                />
            </div>

            {
                totalPages > 0 && (
                    <PaginationComponent

                        total={totalPages}
                        page={currentPage}
                        onChange={(event, newPage) => setCurrentPage(newPage)}
                    />
                )
            }


            <DeleteDialog
                open={confirmDialogOpen}
                title="Chart löschen"
                message="Möchten Sie dieses Chart wirklich löschen?"
                onClose={handleDeleteCancel}
                onConfirm={handleDelete}
            />
        </Container>
    )
        ;
}
