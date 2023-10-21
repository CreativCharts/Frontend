import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavigationMenu from './NavigationMenu';
import UserMenu from './UserMenu';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'light' : 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <NavigationMenu />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
