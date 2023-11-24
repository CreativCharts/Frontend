import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardHeader, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useData} from "../context/dataContext/UseData.jsx";


const ChartCard = ({id, children, title, description}) => {
    const navigate = useNavigate();
    const {deleteChart} = useData();

    const handleClick = async () => {
        navigate(`/editor/${id}`);
    };

    const handleDelete = (event) => {
        event.stopPropagation();
        deleteChart(id);
    };

    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} onClick={handleClick}>
            <CardActionArea>
                <CardHeader sx={{textAlign: 'center'}}
                            action={
                                <IconButton aria-label="delete"
                                            onClick={handleDelete}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            }
                            title={title}
                            subheader={description}
                />
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
    title: PropTypes.string,
    description: PropTypes.string,
    onDelete: PropTypes.func,
};

export default ChartCard;

