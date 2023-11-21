import {useState} from 'react';

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
            <h2>Benachrichtigungen</h2>
            <form>
                <label>
                    Benachrichtigungen aktivieren:
                    <br/>
                    <input
                    type="radio"
                    checked={notificationsEnabled}
                    onChange={handleToggleChange}
                />
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
            </form>
        </section>

    );
}

export default NotificationSettings;
