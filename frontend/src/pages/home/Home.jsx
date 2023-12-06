import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {Button, Typography, Container} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from "@mui/icons-material/Settings";
import AppRegistration from "@mui/icons-material/AppRegistration";
import LoginIcon from '@mui/icons-material/Login';
import './Home.css';

const HomeButton = ({to, icon, text}) => (
    <Button
        component={Link}
        to={to}
        variant="contained"
        color="primary"
        startIcon={icon}
        className="home-button"
    >
        {text}
    </Button>
);

export const Home = () => {
    return (
        <Container className="home-container">
            <div className="home-header">
                <Typography variant="h2" className="home-title">Creative Charts App</Typography>
                <Typography variant="h3" className="home-subtitle">Create charts from your data</Typography>
            </div>

            <div className="home-buttons">
                <HomeButton to="/home" icon={<HomeIcon/>} text="Home"/>
                <HomeButton to="/dashboard" icon={<DashboardIcon/>} text="Dashboard"/>
                <HomeButton to="/editor" icon={<EditIcon/>} text="Editor"/>
                <HomeButton to="/settings" icon={<SettingsIcon/>} text="Settings"/>
                <HomeButton to="/register" icon={<AppRegistration/>} text="Register"/>
                <HomeButton to="/login" icon={<LoginIcon/>} text="Login"/>
            </div>
        </Container>
    );
};

HomeButton.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};

export default Home;