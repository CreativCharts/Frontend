import {Button, Typography, Container} from '@mui/material';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <Container className="landing-container">

            <div style={{height: '100px'}}/>

            <Typography variant="h1" className="landing-title">
                Creativ Charts App
            </Typography>


            <Typography variant="h2" className="landing-subtitle">
                Create charts from your data
            </Typography>

            <Typography variant="h3" className="landing-description">
                Creativ Charts App is a web application that allows you to create charts from your data.
            </Typography>


            <Button component={Link}
                    to="/dashboard"
                    variant="contained"
                    color="primary"
                    className="landing-button">
                Dashboard
            </Button>
            <Button component={Link}
                    to="/editor"
                    variant="contained"
                    color="primary"
                    className="landing-button">
                editor
            </Button>
            <Button component={Link}
                    to="/login"
                    variant="outlined"
                    color="primary"
                    className="landing-button">
                Login
            </Button>
            <Button component={Link}
                    to="/register"
                    variant="outlined"
                    color="primary"
                    className="landing-button">
                Register
            </Button>
        </Container>
    );
};

export default LandingPage;
