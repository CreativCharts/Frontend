import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDarkMode } from '../../../context/DarkModeContext';

function DarkModeToggle() {
    const { toggleDarkMode } = useDarkMode();

       const handleToggle = () => {
        console.log('Toggle Button geklickt');
        toggleDarkMode();
    };

    return (
        <IconButton color="inherit" onClick={handleToggle}>
            <Brightness4Icon />
        </IconButton>
    );
}

export default DarkModeToggle;
