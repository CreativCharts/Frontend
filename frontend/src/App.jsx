import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DarkModeProvider} from './components/context/darkModeContext/DarkModeContext.jsx';
import {DataProvider} from "./components/context/dataContext/ProviderValue.jsx";
import AppBarComponent from "./components/layout/header/AppBarComponent.jsx";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Editor from './pages/editor/Editor.jsx';
import Home from './pages/home/Home.jsx';
import SettingsPage from "./pages/settings/SettingsPage.jsx";
import SideDrawer from "./components/drawer/SideDrawer/SideDrawer.jsx";
import './App.css';
import Impressions from "./pages/impressions/Impressions.jsx";
import {AuthProvider} from "./components/context/authContext/AuthContext.jsx";


const NotFound = () => {
    return (
            <div>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
    );
}

export default function App() {
    const [open, setOpen] = useState(false);
    const [drawerMiniOpen, setDrawerMiniOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setDrawerMiniOpen(false);
    };

    const handleDrawerMiniOpen = () => {
        setDrawerMiniOpen(true);
    };

    return (
            <AuthProvider>
                <DarkModeProvider>
                    <Router>
                        <div>
                            <AppBarComponent
                                    open={open}
                                    handleDrawerOpen={handleDrawerOpen}
                                    handleDrawerMiniOpen={handleDrawerMiniOpen}
                            />
                        </div>

                        <SideDrawer
                                open={drawerMiniOpen || open}
                                handleDrawerClose={handleDrawerClose}
                                handleDrawerOpen={handleDrawerOpen}
                        />

                        <DataProvider>
                            <Routes>
                                <Route path="*" element={<NotFound/>}/>
                                <Route path="/" element={<Dashboard/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/editor/:id" element={<Editor/>}/>
                                <Route path="/settings" element={<SettingsPage/>}/>
                                <Route path="/impressum" element={<Impressions/>}/>
                            </Routes>
                        </DataProvider>
                    </Router>
                </DarkModeProvider>
            </AuthProvider>
    );
}

