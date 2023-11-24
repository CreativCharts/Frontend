import {createContext, useState, useContext, useEffect, useMemo} from 'react';
import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import PropTypes from "prop-types";

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {
    },
});

export const useDarkMode = () =>
    useContext(DarkModeContext);

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const contextValue = useMemo(() => ({
        darkMode,
        toggleDarkMode
    }), [darkMode, toggleDarkMode]);

    return (
        <DarkModeContext.Provider value={contextValue}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </DarkModeContext.Provider>
    );
}


DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
