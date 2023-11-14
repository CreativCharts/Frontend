import  {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

const NavigationMenu = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/dashboard">Dashboard</MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/editor">Editor</MenuItem>
            </Menu>
        </>
    );
};

export default NavigationMenu;
