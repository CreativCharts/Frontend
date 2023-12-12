import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, IconButton, Box} from '@mui/material';
import UserMenu from './UserMenu.jsx';
import DarkModeToggle from "../../buttons/DarkModeToggle.jsx";
import MenuIcon from "@mui/icons-material/Menu";


export default function AppBarComponent({open, handleDrawerOpen, handleDrawerMiniOpen}) {


    return (
        <Box
            sx={{flexGrow: 1}}
        >
            <AppBar
                position="sticky"
                style={{zIndex: 1300}}
            >
                <Toolbar
                    style={{
                        justifyContent: 'space-between'
                    }}
                >

                    <MenuIcon
                        edge="start"
                        color="default"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        sx={{
                            display: {xs: 'block', md: 'none'}
                        }}
                    />
                    <IconButton
                        edge="start"
                        color="default"
                        aria-label="home"
                        component={Link} to="/"
                    >
                        <Typography
                            variant="h6"
                            padding={1}
                        >
                            CreativeCharts
                        </Typography>
                    </IconButton>

                    <div style={{
                        marginLeft: 'auto'
                    }}
                    >
                        <DarkModeToggle/>
                        <UserMenu/>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
