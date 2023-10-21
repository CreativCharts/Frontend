import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = ({ handleOpenNavMenu }) => {
    return (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
            <MenuIcon/>
        </IconButton>
    );
}

export default MenuButton;
