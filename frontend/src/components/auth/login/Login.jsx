import React, {useState, useContext, useEffect, useCallback} from 'react';
import {AuthContext} from '../../context/authContext/AuthContext.jsx';
import {Button, TextField, Grid, Dialog, DialogTitle, DialogContent, Slide} from '@mui/material';
import {login} from '../../../api/api.js';
import './Login.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {isLoginOpen, handleLoginClose} = useContext(AuthContext);
    // Verwendung von Optional Chaining bei der Überprüfung von window.matchMedia
    const [darkMode, setDarkMode] = useState(window.matchMedia?.('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const handleDarkModeChange = (e) => {
            setDarkMode(e.matches);
        };
        const matchMedia = window.matchMedia?.('(prefers-color-scheme: dark)');
        matchMedia?.addEventListener('change', handleDarkModeChange);
        return () => matchMedia?.removeEventListener('change', handleDarkModeChange);
    }, []);

    const clearErrorMessageAfterSomeDelay = useCallback(() => {
        const timeout = setTimeout(() => {
            setError('');
        }, 5000); // Erhöhte Dauer für Fehlermeldung
        return () => clearTimeout(timeout);
    }, []);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
            const user = {username, password};
            const response = await login(user);
            console.log(response);
            handleLoginClose();
        } catch (err) {
            setError('Fehler beim Login: ' + err.message);
            clearErrorMessageAfterSomeDelay();
            console.error(err);
        }
    }, [username, password, handleLoginClose, clearErrorMessageAfterSomeDelay]);

    useEffect(() => {
        if (!isLoginOpen) {
            setUsername('');
            setPassword('');
        }
    }, [isLoginOpen]);

    return (
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <Dialog
                        open={!!isLoginOpen}
                        onClose={handleLoginClose}
                        TransitionComponent={Transition}
                        className="dialog"
                >
                    <DialogTitle className="dialogTitle">Login</DialogTitle>
                    <DialogContent className="dialogContent">
                        <form onSubmit={handleSubmit} className="loginForm">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                            label="Email / Benutzername"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={username}
                                            onChange={handleUsernameChange}
                                            className="inputField"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                            label="Passwort"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            required
                                            value={password}
                                            onChange={handlePasswordChange}
                                            className="inputField"
                                    />
                                </Grid>
                                {error && (
                                        <Grid item xs={12}>
                                            <p className='errorMessage'>{error}</p>
                                        </Grid>
                                )}
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" type="submit" fullWidth
                                            className="submitButton">
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
    );
};

export default Login;
