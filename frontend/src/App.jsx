import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './components/context/darkModeContext/DarkModeContext.jsx';
import { DataProvider } from "./components/context/dataContext/ProviderValue.jsx";
import Header from "./components/layout/header/Header.jsx";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Editor from './pages/editor/Editor.jsx';
import Home from "./pages/home/Home.jsx";
import SettingsPage from "./pages/settings/SettingsPage.jsx";
import './App.css';
import '../src/components/styles/theme.css';


const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    );
}
const App = () => {
    return (
        <DarkModeProvider>
            <Router>
                <Header/>
                <DataProvider>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/editor" element={<Editor/>}/>
                        <Route path="/editor/:id" element={<Editor/>}/>
                        <Route path="/settings" element={<SettingsPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </DataProvider>
            </Router>
        </DarkModeProvider>
    );
};

export default App;
