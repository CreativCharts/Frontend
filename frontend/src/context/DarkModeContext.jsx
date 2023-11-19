import {createContext, useState, useContext, useEffect} from 'react';
import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';

const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {
    },
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log('Aktueller Theme-Modus:', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    const toggleDarkMode = () => {
        console.log('Toggling Dark Mode:', !darkMode);
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </DarkModeContext.Provider>
    );
};
