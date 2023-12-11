import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import {Link} from 'react-router-dom';

export default function AppBarComponent() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    component={Link} to="/">
                    <Typography
                        variant="h6">
                        CreativeCharts
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
