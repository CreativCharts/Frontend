import {AppBar, Toolbar} from '@mui/material';
import DarkModeToggle from './DarkModeToggle';
import NavigationMenu from './NavigationMenu';
import UserMenu from './UserMenu';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <NavigationMenu/>
                <DarkModeToggle/>
                <UserMenu/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
