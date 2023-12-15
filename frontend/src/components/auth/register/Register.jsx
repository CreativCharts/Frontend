import React, { useState, useCallback } from 'react';
import { Button, TextField, Grid, Dialog, DialogTitle, DialogContent, Slide } from '@mui/material';
import { register } from '../../../api/api'; // Stellen Sie sicher, dass die API-Funktion existiert
import './Register.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
            const user = { username, email, password };
            const response = await register(user);
            console.log(response);
            handleClose();
        } catch (err) {
            setError('Fehler bei der Registrierung: ' + err.message);
            // Optional: Fehlermeldung nach einiger Zeit löschen
        }
    }, [username, email, password, handleClose]);

    return (
        <div>
            <Button color="primary" variant="contained" onClick={handleOpen}>
                Registrieren
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className="dialog"
            >
                <DialogTitle className="dialogTitle">Registrieren</DialogTitle>
                <DialogContent className="dialogContent">
                    <form onSubmit={handleSubmit} className="registerForm">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Benutzername"
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
                                    label="E-Mail"
                                    variant="outlined"
                                    type="email"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
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
                                    Registrieren
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Register;
