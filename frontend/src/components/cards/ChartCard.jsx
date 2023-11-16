import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import {fetchChartById} from "../../api/api.js";
import {useData} from "../../context/UseData.jsx";


const ChartCard = ({id, children}) => {
    const {setChartData, setChartType, setChartId} = useData();
    const navigate = useNavigate();

    const handleClick = async () => {
        // console.log("ChartCard ID:", id);
        // if (!id) {
        //     console.error('Chart ID nicht übergeben!');
        //     return;
        // }
        // try {
        //     const response = await fetchChartById(id);
        //     if (response?.data) {
        //         setChartData(response.gridData);
        //         setChartType(response.type);
        //         setChartId(id);
        //         navigate('/editor');
        //     }
        // } catch (error) {
        //     console.error('Fehler beim Abrufen der Chart-Daten:', error);
        // }
        navigate(`/editor/${id}`);
    };


    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} onClick={handleClick}>
            <CardActionArea>
                <CardHeader sx={{textAlign: 'center'}}/>
                <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}>


                    <div style={{width: '100%', paddingTop: '56.25%'}}/>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'hidden'
                    }}>
                        {children}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


ChartCard.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default ChartCard;
