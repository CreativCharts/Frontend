import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import Editor from '../pages/Editor.jsx';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Dashboard/>}/>
                <Route path="/editor" element={<Editor/>}/>
            </Routes>
        </Router>
    );
}

