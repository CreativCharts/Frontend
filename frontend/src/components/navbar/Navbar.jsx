import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@mui/material';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <AppBar className={"navbar-root"} position="relative">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                <Button color="inherit" component={Link} to="/editor">Editor</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
