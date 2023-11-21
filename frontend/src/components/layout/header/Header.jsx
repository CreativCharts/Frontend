import {AppBar, Toolbar, IconButton} from '@mui/material';
import DarkModeToggle from '../../buttons/DarkModeToggle.jsx';
import UserMenu from './UserMenu';
import Sidebar from "../sidebar/Sidebar.jsx";
import {useState} from "react";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (

        <AppBar position="sticky">
            <Toolbar>
                <Sidebar open={drawerOpen} onClose={toggleDrawer(true)}/>
                <IconButton/>


                <div style={{marginLeft: 'auto'}}>
                    <DarkModeToggle/>
                    <UserMenu/>
                </div>
            </Toolbar>
        </AppBar>
    );
}


export default Header;
