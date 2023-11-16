import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Editor from './pages/Editor.jsx';
import LandingPage from "./pages/LandingPage.jsx";
import {MainLayout} from './components/layout/MainLayout.jsx';
import Header from "./components/layout/header/Header.jsx";

import {DataProvider} from "./context/ProviderValue.jsx";


const NotFound = () => (
    <div>
        <h1>404 - Not Found!</h1>
    </div>
);

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
                        <Route path="/editor/:id" element={<Editor/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </MainLayout>
            </DataProvider>
        </Router>

    );
};

export default App;
