import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {DarkModeProvider, useDarkMode} from './context/DarkModeContext.jsx';
import {MainLayout} from './components/layout/MainLayout.jsx';
import {DataProvider} from "./context/ProviderValue.jsx";
import Header from "./components/layout/header/Header.jsx";
import Dashboard from './pages/Dashboard.jsx';
import Editor from './pages/Editor.jsx';
import LandingPage from "./pages/LandingPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

const NotFound = () => (
    <div>
        <h1>404 - Not Found!</h1>
    </div>
);

const App = () => {
    const {darkMode} = useDarkMode();

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <DataProvider>
                    <DarkModeProvider>
                        <MainLayout>
                            <Routes>
                                <Route path="/" element={<LandingPage/>}/>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/editor/:id" element={<Editor/>}/>
                                <Route path="/settings" element={<SettingsPage/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </MainLayout>
                    </DarkModeProvider>
                </DataProvider>
            </Router>
        </ThemeProvider>
    );
};

export default App;
