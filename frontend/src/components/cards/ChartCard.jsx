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
                alignItems: 'center',
                position: 'relative',
            }}>
                <div style={{ width: '100%', paddingTop: '56.25%' }} />
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}>
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
