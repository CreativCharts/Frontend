import {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const UserProfileSettings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
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
                <TextField
                        id="username"
                        label="Benutzername ändern"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        size="small"
                        fullWidth
                        sx={{width: '100%'}}    // Set width to 100%
                />
                <TextField
                        id="email"
                        label="E-Mail ändern"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        size="small"
                        fullWidth
                        sx={{width: '100%'}}    // Set width to 100%
                />
                <Button
                        variant="outlined"
                        startIcon={<SaveIcon/>}
                        onClick={() => alert('Änderungen gespeichert!')}
                        sx={{mt: 1}}
                >
                    Änderungen speichern
                </Button>
            </Box>
    );
};

export default UserProfileSettings;
