import {Container, Grid} from '@mui/material';

export const MainLayout = ({children}) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Container>
    );
};
