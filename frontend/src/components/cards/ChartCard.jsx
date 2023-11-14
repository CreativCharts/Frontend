import {Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ChartCard = ({children}) => {


    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardActionArea component={Link} to="/editor" >
                <CardHeader/>
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
    children: PropTypes.node
};

export default ChartCard;
