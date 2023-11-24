import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const drawerWidth = 200;

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, link: '/home' },
        { text: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' },
        { text: 'Editor', icon: <EditIcon />, link: '/editor' },
        { text: 'Settings', icon: <SettingsIcon />, link: '/settings' }

    ];

    return (
        <Drawer
            variant="persistent"
            open={drawerOpen}
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <Divider />
            <List>
                {menuItems.map(({ text, icon, link }) => (
                    <ListItemButton key={text} component={Link} to={link} onClick={toggleDrawer}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
}

export default Sidebar;
