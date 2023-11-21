import React from 'react';
import UserProfileSettings from '../../components/settings/UserProfileSettings.jsx';
import NotificationSettings from '../../components/settings/NotificationSettings.jsx';
import SecuritySettings from '../../components/settings/SecuritySettings.jsx';
import  '../../components/styles/UserProfileSettings.css';

const SettingsPage = () => {
    return (
        <div>
            <h1>Einstellungen</h1>
            <UserProfileSettings />
            <NotificationSettings />
            <SecuritySettings />
            
        </div>
    );
};

export default SettingsPage;
