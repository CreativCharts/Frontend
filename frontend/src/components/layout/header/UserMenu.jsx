import { useState } from 'react';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar alt="User Avatar" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem component={Link} to="/settings">
                    <Settings />
                    Settings
                </MenuItem>
                <MenuItem component={Link} to="/logout">
                    <Logout />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;
