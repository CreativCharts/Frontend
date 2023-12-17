import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsButtonComponent = ({ onClick }) => {
    return (
        <IconButton aria-label="settings" onClick={onClick}>
            <SettingsIcon />
        </IconButton>
    );
};

export default SettingsButtonComponent;
