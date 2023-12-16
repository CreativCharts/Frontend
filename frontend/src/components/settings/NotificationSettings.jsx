import {useState} from 'react';
import {Box, FormControl, FormControlLabel, Checkbox, Select, MenuItem, Button, InputLabel} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const NotificationSettings = () => {

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [notificationType, setNotificationType] = useState('Email');

    const handleToggleChange = (event) => {
        setNotificationsEnabled(event.target.checked);
    };

    const handleTypeChange = (event) => {
        setNotificationType(event.target.value);
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
                                    checked={notificationsEnabled}
                                    onChange={handleToggleChange}
                            />
                        }
                        label="Benachrichtigungen aktivieren"
                        labelPlacement="top"
                        sx={{mb: 1, width: '100%'}}
                />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="notification-type-label">Art der Benachrichtigung</InputLabel>
                    <Select
                            labelId="notification-type"
                            id="notification-type-select"
                            value={notificationType}
                            onChange={handleTypeChange}
                            label="Art der Benachrichtigung"
                    >
                        <MenuItem value={"Email"}>Email</MenuItem>
                        <MenuItem value={"SMS"}>SMS</MenuItem>
                        <MenuItem value={"Push"}>Push</MenuItem>
                    </Select>
                </FormControl>
                <Button
                        variant="outlined"
                        startIcon={<SaveIcon/>}
                        sx={{mt: 1}}
                >
                    Änderungen speichern
                </Button>
            </Box>
    );
};

export default NotificationSettings;
