import React from "react";
import {Container, Typography, Paper, Grid} from "@mui/material";
import UserProfileSettings from '../../components/settings/UserProfileSettings.jsx';
import NotificationSettings from '../../components/settings/NotificationSettings.jsx';
import SecuritySettings from '../../components/settings/SecuritySettings.jsx';

const SettingsPage = () => {
    const darkMode = false;


    return (
            <Container sx={{mt: 12}} align="center" darkMode={darkMode}>
                <Typography variant="h4" gutterBottom>Settings Page</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{p: 2}}>
                            <Typography variant="h6" mb={2}>User Profile</Typography>
                            <UserProfileSettings/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{p: 2}}>
                            <Typography variant="h6" mb={2}>Notifications</Typography>
                            <NotificationSettings/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{p: 2}}>
                            <Typography variant="h6" mb={2}>Security</Typography>
                            <SecuritySettings/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
    )
};

export default SettingsPage;
