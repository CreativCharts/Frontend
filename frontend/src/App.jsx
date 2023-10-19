import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Editor from './pages/Editor.jsx';
import LandingPage from "./pages/LandingPage.jsx";
import {MainLayout, SidebarLayout, ContentLayout} from './components/layout/MainLayout.jsx';
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar.jsx";


const NotFound = () => {
    return <h1>404 Not Found</h1>;
};

const App = () => {
    return (
        <Router>
            <MainLayout>
                <SidebarLayout>
                    {/* Sidebar content */}

                </SidebarLayout>
                <ContentLayout>
                    <ResponsiveAppBar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/editor" element={<Editor/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </ContentLayout>
            </MainLayout>
        </Router>
    );
};


export default App;
