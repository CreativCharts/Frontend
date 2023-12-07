import { Container, Typography, Paper, useTheme } from "@mui/material";
import { useDarkMode } from '../../components/context/darkModeContext/DarkModeContext.jsx';
import UserProfileSettings from '../../components/settings/UserProfileSettings.jsx';
import NotificationSettings from '../../components/settings/NotificationSettings.jsx';
import SecuritySettings from '../../components/settings/SecuritySettings.jsx';
import './SettingsPage.css';

const SettingsPage = () => {
    const { darkMode } = useDarkMode();
    const theme = useTheme();

    return (
        <Container className='settings-page-container' style={{ backgroundColor: theme.palette.background.default }}>
            <Typography variant="h4" gutterBottom></Typography>

            <Paper className="notification-settings" style={{ backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h6" gutterBottom></Typography>
                <UserProfileSettings/>
            </Paper>

            <Paper className="notification-settings" style={{ backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h6" gutterBottom></Typography>
                <NotificationSettings/>
            </Paper>

            <Paper className="security-settings" style={{ backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h6" gutterBottom></Typography>
                <SecuritySettings/>
            </Paper>
        </Container>
    );
};

export default SettingsPage;
