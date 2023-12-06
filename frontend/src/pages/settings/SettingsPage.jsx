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
            <Typography variant="h4" gutterBottom>Einstellungen</Typography>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom>Benutzerprofil</Typography>
                <UserProfileSettings/>
            </Paper>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom>Benachrichtigungen</Typography>
                <NotificationSettings/>
            </Paper>

            <Paper className="settings-section">
                <Typography variant="h6" gutterBottom>Sicherheit</Typography>
                <SecuritySettings/>
            </Paper>
        </Container>
    );
};

export default SettingsPage;
