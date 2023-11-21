import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Home.css';
import PropTypes from "prop-types";

const HomeButton = ({ to, icon, text }) => (
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

const Home = () => {
    return (
        <Container className="home-container">
            <div className="home-header">
                <Typography variant="h1" className="home-title">Creative Charts App</Typography>
                <Typography variant="h2" className="home-subtitle">Create charts from your data</Typography>
            </div>

            <div className="home-buttons">
                <HomeButton to="/home" icon={<HomeIcon />} text="Home" />
                <HomeButton to="/dashboard" icon={<DashboardIcon />} text="Dashboard" />
                <HomeButton to="/editor" icon={<EditIcon />} text="Editor" />
                <HomeButton to="/login" icon={<LoginIcon />} text="Login" />
                <HomeButton to="/register" icon={<PersonAddIcon />} text="Register" />
            </div>
        </Container>
    );
};

HomeButton.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};


export default React.memo(Home);

