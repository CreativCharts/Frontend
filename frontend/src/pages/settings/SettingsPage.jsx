import {Container, Typography, Paper} from "@mui/material";
import {useDarkMode} from '../../components/context/darkModeContext/DarkModeContext.jsx';
import UserProfileSettings from '../../components/settings/UserProfileSettings.jsx';
import NotificationSettings from '../../components/settings/NotificationSettings.jsx';
import SecuritySettings from '../../components/settings/SecuritySettings.jsx';
import './SettingsPage.css';

const SettingsPage = () => {
    const {darkMode} = useDarkMode();

    return (
        <Container className={`settings-page-root ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Typography variant="h4" gutterBottom></Typography>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom></Typography>
                <UserProfileSettings/>
            </Paper>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom></Typography>
                <NotificationSettings/>
            </Paper>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom></Typography>
                <SecuritySettings className="security-settings"/>
            </Paper>
        </Container>
    );
};

export default SettingsPage;
