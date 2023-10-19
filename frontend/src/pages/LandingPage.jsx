import ResponsiveAppBar from "../components/layout/ResponsiveAppBar.jsx";
import {Button, Typography, Container} from '@mui/material';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing-root">
            <ResponsiveAppBar/>
            <Container>
                <Typography variant="h1" className="landing-title">
                    Creativ Charts App
                </Typography>
                <Typography variant="h2" className="landing-subtitle">
                    Create charts from your data
                </Typography>
                <Button component={Link} to="/dashboard" variant="contained" color="primary"
                        className="landing-button">
                    Get Started
                </Button>
            </Container>
        </div>
    );
};

export default LandingPage;
