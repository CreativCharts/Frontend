import {useState} from 'react';
import {Button} from "@mui/material";
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
        <section>
            <h4>Benachrichtigungen</h4>
            <form>
                <label>
                    Benachrichtigungen aktivieren:
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={handleToggleChange}
                    />
                    <br/>
                    <br/>
                </label>

                <label>
                    Art der Benachrichtigung:
                    <br/>
                    <select
                        value={notificationType}
                        onChange={handleTypeChange}
                        form={"notificationTypeForm"}
                        title={"notificationTypeForm"}
                    >

                        <option value="Email">Email</option>
                        <option value="SMS">SMS</option>
                        <option value="Push">Push</option>
                    </select>
                </label>
                <Button
                    form={"notificationTypeForm"}
                    title={"notificationTypeForm"}
                >
                    <SaveIcon/>
                </Button>
            </form>
        </section>

    );
}

export default NotificationSettings;
