import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from '@mui/material/styles';


function DarkModeToggle({darkMode, setDarkMode}) {
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme} children={null}>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                <Brightness4Icon/>
            </IconButton>
        </ThemeProvider>
    );
}

export default DarkModeToggle;
