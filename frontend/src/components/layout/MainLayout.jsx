import PropTypes from 'prop-types';
import {Container, Grid} from '@mui/material';


export const MainLayout = ({children}) => {

    return (
        <Container maxWidth="xl" sx={{ mt: 4, height: 'calc(100% - 96px)' }}>
            <Grid container spacing={2} sx={{ height: 'calc(100% - 96px)' }}>
                {children}
            </Grid>
        </Container>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
