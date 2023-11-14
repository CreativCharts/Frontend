import { Card, CardContent, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';

const ChartCard = ({ children }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardHeader />
            <CardContent sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
};

ChartCard.propTypes = {
    children: PropTypes.node
};

export default ChartCard;
