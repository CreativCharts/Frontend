import {useState} from 'react';

const SecuritySettings = () => {
    const [password, setPassword] = useState('');
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTwoFactorAuthChange = (event) => {
        setTwoFactorAuth(event.target.checked);
    };

    return (
        <section>
            <h2>Sicherheit</h2>
            <form>
                <label>
                    Passwort ändern:
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <label>
                    Zwei-Faktor-Authentifizierung:
                    <br/>
                    <input
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={handleTwoFactorAuthChange}
                    />
                </label>
            </form>
        </section>
    );
};

export default SecuritySettings;
