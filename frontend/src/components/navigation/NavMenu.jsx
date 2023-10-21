import React from 'react';
import Menu from '@mui/material/Menu';
import NavMenuItem from './NavMenuItem';

const NavMenu = ({anchorElNav, handleCloseNavMenu}) => {
    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'left'}}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
        >
            <NavMenuItem handleClose={handleCloseNavMenu} label="Home"/>
            <NavMenuItem handleClose={handleCloseNavMenu} label="Dashboard"/>
            <NavMenuItem handleClose={handleCloseNavMenu} label="Editor"/>
        </Menu>
    );
}

export default NavMenu;
