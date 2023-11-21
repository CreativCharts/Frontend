import React, { useState } from 'react';
import { Drawer, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import { useDarkMode } from '../context/darkModeContext/DarkModeContext.jsx';
import SaveButtonComponent from '../buttons/SaveToDatabase.jsx';
import './SettingsDrawer.css';

const SettingsDrawer = ({
    chartTitle,
    setChartTitle,
    chartDescription,
    setChartDescription,
    chartType,
    setChartType,
    saveToDatabase
}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { darkMode } = useDarkMode();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <Button onClick={toggleDrawer}>Optionen</Button>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <div className={`settingsDrawer ${darkMode ? 'darkMode' : 'lightMode'}`}>
                    <TextField
                        className="settingsField"
                        variant="outlined"
                        label="Titel"
                        placeholder={"Titel"}
                        value={chartTitle}
                        onChange={(e) => setChartTitle(e.target.value)}
                    />
                    <TextField
                        className="settingsField"
                        variant="outlined"
                        label="Beschreibung"
                        placeholder={"Beschreibung"}
                        value={chartDescription}

                        onChange={(e) => setChartDescription(e.target.value)}
                    />
                    <FormControl fullWidth className="settingsField">
                        <InputLabel className="settingsInputLabel">Chart Type</InputLabel>
                        <Select
                            value={chartType}
                            label="Chart Type"
                            onChange={(e) => setChartType(e.target.value)}
                        >
                            <MenuItem value="bar">Bar Chart</MenuItem>
                            <MenuItem value="line">Line Chart</MenuItem>
                            <MenuItem value="pie">Pie Chart</MenuItem>
                        </Select>
                    </FormControl>
                    <SaveButtonComponent
                        className="saveButton"
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={saveToDatabase}
                    >
                        Speichern
                    </SaveButtonComponent>
                </div>
            </Drawer>
        </>
    );
};

SettingsDrawer.propTypes = {
    chartTitle: PropTypes.string,
    setChartTitle: PropTypes.func,
    chartDescription: PropTypes.string,
    setChartDescription: PropTypes.func,
    chartType: PropTypes.string.isRequired,
    setChartType: PropTypes.func.isRequired,
    saveToDatabase: PropTypes.func.isRequired,
};

export default SettingsDrawer;
