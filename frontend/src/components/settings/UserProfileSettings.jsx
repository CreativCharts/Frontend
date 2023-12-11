import {useState} from 'react';
import {Button} from "@mui/material";
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
        <section>
            <h4>Benutzerprofil</h4>
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
                <Button
                    form={"usernameForm"}
                    title={"usernameForm"}
                >
                    <SaveIcon/>
                </Button>
                <label>
                    <br/><br/>
                    E-Mail ändern:
                    <br/>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <Button
                    form={"emailForm"}
                    title={"emailForm"}
                >
                    <SaveIcon/>
                </Button>
            </form>
        </section>
    );
};

export default UserProfileSettings;
