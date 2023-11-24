import PropTypes from 'prop-types';
import {Container, Grid} from '@mui/material';


export const MainLayout = ({children}) => {

    return (
        <Container maxWidth="xl"
                     sx={{
                          mt: 4,
                          mb: 4
                     }}>
            <Grid container
                    spacing={3}>
                    {children}
            </Grid>
        </Container>
    );
}


MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
