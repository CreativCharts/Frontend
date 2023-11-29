import UserProfileSettings from '../../components/settings/UserProfileSettings.jsx';
import NotificationSettings from '../../components/settings/NotificationSettings.jsx';
import SecuritySettings from '../../components/settings/SecuritySettings.jsx';
import './SettingsPage.css';
import {Box} from "@mui/material";

const SettingsPage = () => {
    return (
        <div className="settings-page-root">
            <h1>Einstellungen</h1>

            <Box>
                <div className='user-profile-settings-header'>
                    <UserProfileSettings className="user-profile-settings"/>
                </div>
            </Box>

            <Box>
                <div className='notification-settings-header'>
                    <NotificationSettings className="notification-settings"/>
                </div>
            </Box>

            <Box>
                <div className='security-settings-header'>
                    <SecuritySettings className="security-settings"/>
                </div>
            </Box>


        </div>
    );
};

export default SettingsPage;
