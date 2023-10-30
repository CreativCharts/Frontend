import {useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Editor from './pages/Editor.jsx';
import LandingPage from "./pages/LandingPage.jsx";
import {MainLayout} from './components/layout/MainLayout.jsx';
import Header from "./components/layout/header/Header.jsx";
import {DataProvider} from './components/charts/DataContext.jsx';

const NotFound = () => {
    return <h1>404 Not Found</h1>;
};
const App = () => {


    return (
        <Router>
            <Header/>
            <DataProvider>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/editor" element={<Editor/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </MainLayout>
            </DataProvider>
        </Router>
    );
};

export default App;
