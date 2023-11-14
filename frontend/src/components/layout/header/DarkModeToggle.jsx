import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'light' : 'dark',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <IconButton color="inherit" onClick={() => setDarkMode(darkMode)}>
                <Brightness4Icon/>
            </IconButton>
        </ThemeProvider>
    );
}

export default DarkModeToggle;
