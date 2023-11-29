import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeToggle from '../../buttons/DarkModeToggle.jsx';
import UserMenu from './UserMenu.jsx';
import SideDrawer from "../../drawer/SideDrawer/SideDrawer.jsx";

const drawerWidth = 240;
const drawerPadding = 16;

const HeadBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%' }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{ marginLeft: 'auto' }}>
                        <DarkModeToggle />
                        <UserMenu />
                    </div>
                </Toolbar>
            </AppBar>
            <SideDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </React.Fragment>
    );
};

export default HeadBar;
