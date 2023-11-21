import {useState} from 'react';
import {Link} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import InfoIcon from '@mui/icons-material/Info';
import {ListItemIcon} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const menuItems = [
    {text: 'Home', icon: <HomeIcon/>, link: '/home'},
    {text: 'Dashboard', icon: <DashboardIcon/>, link: '/dashboard'},
    {text: 'Editor', icon: <EditIcon/>, link: '/editor'},
    {text: 'Login', icon: <LoginIcon/>, link: '/login'},
    {text: 'Register', icon: <RegisterIcon/>, link: '/register'},
    {text: 'About', icon: <InfoIcon/>, link: '/about'},
];

const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '.MuiDrawer-paper': {
                        transition: 'transform 0.8s ease-in-out',
                        maxHeight: '100vh',
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    },
                    '.MuiListItemButton-root': {
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        }
                    }
                }}
            >
                <List>
                    {menuItems.map(({text, icon, link}) => (
                        <ListItemButton key={text} component={Link} to={link}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
