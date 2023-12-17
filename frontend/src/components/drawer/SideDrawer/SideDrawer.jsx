import {styled, useTheme} from '@mui/material/styles';
import {Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import ImpressumIcon from '@mui/icons-material/Info';
import PropTypes from "prop-types";
import * as theme from "@mui/system";
import Notch from "./Notch.jsx";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(1),
});

theme.palette.primary = {
    main: '#abcdef',
    contrastText: '#fff',
};





const StyledDrawer =
        styled(MuiDrawer,
                {shouldForwardProp: (prop) => prop !== 'open'})(
                ({theme, open}) => ({
                    width: drawerWidth,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    ...(open && {
                        ...openedMixin(theme),
                        '& .MuiDrawer-paper': openedMixin(theme),
                    }),
                    ...(!open && {
                        ...closedMixin(theme),
                        '& .MuiDrawer-paper': closedMixin(theme),
                    }),
                }),
        );

export default function SideDrawer({open, handleDrawerOpen, handleDrawerClose}) {
    const theme = useTheme();
    const menuItems = [
        {text: 'Home', icon: <HomeIcon/>, link: '/home'},
        {text: 'Dashboard', icon: <DashboardIcon/>, link: '/dashboard'},
        {text: 'Editor', icon: <EditIcon/>, link: '/editor'},
        {text: 'Settings', icon: <SettingsIcon/>, link: '/settings'},
        {text: 'Impressum', icon: <ImpressumIcon/>, link: '/impressum'},
    ];

    SideDrawer.propTypes = {
        open: PropTypes.bool.isRequired,
        handleDrawerOpen: PropTypes.func.isRequired,
        handleDrawerClose: PropTypes.func.isRequired

    }
    return (
            <StyledDrawer
                    variant="permanent"
                    open={open}
                    onMouseEnter={handleDrawerOpen}
                    onMouseLeave={handleDrawerClose}
                    sx={{
                        ...(open && {
                            ...openedMixin(theme),
                            '& .MuiDrawer-paper': openedMixin(theme),
                        }),
                        ...(!open && {
                            ...closedMixin(theme),
                            '& .MuiDrawer-paper': closedMixin(theme),
                        }),
                    }}
            >
                {!open && <Notch/>}
                <Toolbar/>
                <List>
                    {menuItems.map(({text, icon, link}) => (
                            <ListItem
                                    key={text}
                                    disablePadding
                                    sx={{display: 'block'}}
                            >
                                <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                        component={Link}
                                        to={link}
                                >
                                    <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                            primary={text}
                                            sx={{opacity: open ? 1 : 0}}
                                    />
                                </ListItemButton>
                            </ListItem>
                    ))}
                </List>
            </StyledDrawer>
    );
}
