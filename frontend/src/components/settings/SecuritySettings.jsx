import {useState} from 'react';
import {Button, TextField, FormControlLabel, Checkbox, Box} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const SecuritySettings = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSetNewPassword = (event) => {
        setNewPassword(event.target.value);
    }

    const handleConfirmNewPassword = (event) => {
        setConfirmNewPassword(event.target.value);
    }

    const handleTwoFactorAuthChange = (event) => {
        setTwoFactorAuth(event.target.checked);
    };

    return (
            <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        gap: 1,
                        height: '350px'
                    }}
            >
                <FormControlLabel
                        control={
                            <Checkbox
                                    checked={twoFactorAuth}
                                    onChange={handleTwoFactorAuthChange}
                                    fullWidth
                            />
                        }
                        label="Zwei-Faktor-Authentifizierung"
                        labelPlacement="top"
                        sx={{mb: 1, width: '100%'}}
                />
                <TextField
                        id="current-password"
                        label="Aktuelles Passwort"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        size="small"
                        fullWidth
                        sx={{width: '100%'}}
                />
                <TextField
                        id="new-password"
                        label="Neues Passwort"
                        type="password"
                        value={newPassword}
                        onChange={handleSetNewPassword}
                        size="small"
                        fullWidth
                        sx={{width: '100%'}}
                />
                <TextField
                        id="retype-password"
                        label="Neues Passwort bestätigen"
                        type="password"
                        value={confirmNewPassword}
                        onChange={handleConfirmNewPassword}
                        size="small"
                        fullWidth
                        sx={{width: '100%'}}
                />
                <Button
                        variant="outlined"
                        sx={{mt: 1}}
                        startIcon={<SaveIcon/>}
                >
                    Passwort ändern
                </Button>
            </Box>
    );
};

export default SecuritySettings;
