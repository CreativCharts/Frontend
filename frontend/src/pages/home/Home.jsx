import {useContext} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {Button, Typography, Container} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from "@mui/icons-material/Settings";
import AppRegistration from "@mui/icons-material/AppRegistration";
import LoginIcon from '@mui/icons-material/Login';
import {AuthContext} from "../../components/context/authContext/AuthContext.jsx";
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
    const {handleLoginOpen, handleRegisterOpen} = useContext(AuthContext);
    return (
            <Container className="home-container">
                <div className="home-header">
                    <Typography variant="h2" className="home-title">Creative Charts App</Typography>
                    <Typography variant="h3" className="home-subtitle">Create charts from your data</Typography>
                </div>

                <div className="home-buttons">
                    <HomeButton to="/dashboard" icon={<DashboardIcon/>} text="Dashboard"/>
                    <HomeButton to="/editor" icon={<EditIcon/>} text="Editor"/>
                    <HomeButton to="/settings" icon={<SettingsIcon/>} text="Settings"/>
                    <Button
                            onClick={handleRegisterOpen}
                            variant="contained"
                            color="primary"
                            startIcon={<AppRegistration/>}
                            className="home-button"
                    >
                        Register
                    </Button>
                    <Button
                            onClick={handleLoginOpen}
                            variant="contained"
                            color="primary"
                            startIcon={<LoginIcon/>}
                            className="home-button"
                    >
                        Login
                    </Button>
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
