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
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
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
