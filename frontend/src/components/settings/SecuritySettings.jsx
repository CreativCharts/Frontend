import {useState} from 'react';
import {Button} from "@mui/material";

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
        <section>
            <h4>Sicherheit</h4>
            <form>
                <label>
                    Zwei-Faktor-Authentifizierung:
                    <input
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={handleTwoFactorAuthChange}
                    />
                </label>
                <br/><br/>
                <label>
                    Aktuelles Passwort:
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <br/><br/>
                <label>
                    Neues Passwort:
                    <br/>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={handleSetNewPassword}
                    />
                </label>

                <label>
                    <br/><br/>
                    Neues Passwort bestätigen:
                    <br/>
                    <input
                        type="password"
                        value={confirmNewPassword}
                        onChange={handleConfirmNewPassword}
                    />
                </label>
                <br/>
                <Button
                    form={"passwordForm"}
                    title={"passwordForm"}
                >
                    Passwort ändern
                </Button>
            </form>
        </section>
    );
};

export default SecuritySettings;
