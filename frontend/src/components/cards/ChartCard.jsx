import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardHeader, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ChartCard = ({id, title, description, onDelete, children}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/editor/${id}`);
    };

    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardActionArea onClick={handleClick}>
                <CardHeader
                    title={title}
                    subheader={description}
                    action={
                        <IconButton onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                    }
                    sx={{textAlign: 'center'}}
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
    title: PropTypes.string,
    description: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default ChartCard;
