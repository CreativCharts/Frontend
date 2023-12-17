import { useDarkMode } from '../context/darkModeContext/DarkModeContext.jsx';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleToggle = () => {
        console.log('Toggle Button geklickt');
        toggleDarkMode();
    };

    return (
        <IconButton
            color="inherit"
            onClick={handleToggle}
            className="dark-mode-toggle-button">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

export default DarkModeToggle;
