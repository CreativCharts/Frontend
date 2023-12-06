import React, {useState} from 'react';

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
        <section>
            <h2>Benutzerprofil</h2>
            <form>
                <label>
                    Benutzername ändern:
                    <br/>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label>
                    <br/>
                    E-Mail ändern:
                    <br/>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
            </form>
        </section>
    );
};

export default UserProfileSettings;