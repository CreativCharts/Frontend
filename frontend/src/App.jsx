import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DarkModeProvider} from './components/context/darkModeContext/DarkModeContext.jsx';
import {DataProvider} from "./components/context/dataContext/ProviderValue.jsx";
import HeadBar from "./components/layout/header/HeadBar.jsx";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Editor from './pages/editor/Editor.jsx';
import Home from './pages/home/Home.jsx';
import SettingsPage from "./pages/settings/SettingsPage.jsx";
import './App.css';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    );
}

export default function App() {
    return (
        <DarkModeProvider>
            <Router>
                <HeadBar/>
                <DataProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Home/>}/>
                        <Route path="/register" element={<Home/>}/>
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
