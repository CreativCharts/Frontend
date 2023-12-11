import {useState} from "react";
import PropTypes from 'prop-types';
import {Drawer, TextField, Select, MenuItem, FormControl, InputLabel, Box, styled} from '@mui/material';
import SaveButtonComponent from '../../buttons/SaveButtonComponent.jsx';
// import DeleteButton  from "../../buttons/DeleteButton.jsx";
import SaveAsButton from "../../buttons/SaveAsButton.jsx";
import SaveDialog from "../../dialogs/SaveDialog.jsx";
import {useDarkMode} from "../../context/darkModeContext/DarkModeContext.jsx";
import './OptionsDrawer.css';


const StyledDrawer = styled(Drawer)(({theme}) => ({
    width: 'var(--drawer-width)',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 'var(--drawer-width)',
        padding: 'var(--drawer-padding)',
        backgroundColor: theme.palette.background.paper,
    },
}));

const DrawerBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '50%',
    '& .left': {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    '& .right': {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    '& .darkMode': {
        backgroundColor: theme.palette.background.default,
    },
    '& .lightMode': {
        backgroundColor: theme.palette.background.paper,
    },
    '& .MuiTextField-root': {
        width: '50%',
    },
    '& .MuiFormControl-root': {
        width: '50%',
    },
    '& .MuiInputLabel-root': {
        width: '50%',
    }
}));

// OptionsDrawer Komponente
const OptionsDrawer = ({
                           chartTitle,
                           setChartTitle,
                           chartType,
                           setChartType,
                           open,
                           onClose
                       }) => {
    const {darkMode} = useDarkMode();
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [saveMessage, setSaveMessage] = useState("");


    const handleChartTitleChange = (event) => {
        setChartTitle(event.target.value);
        setChartTitle(event.target.value);
    }

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
        setChartType(event.target.value);
    }

    const handleSaveStatus = (success, message) => {
        setSaveMessage(message);
        setSaveDialogOpen(true);
    }

    const handleCloseDialogAndDrawer = () => {
        setSaveDialogOpen(false);
        onClose();
    }


    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerBox className={darkMode ? 'darkMode' : 'lightMode'}>
                <div className="left">
                    <TextField
                        id="chart-title"
                        label="Titel"
                        variant="outlined"
                        value={chartTitle}
                        onChange={handleChartTitleChange}
                    />
                    <FormControl variant="outlined">
                        <InputLabel id="chart-type-label">Chart-Typ</InputLabel>
                        <Select
                            labelId="chart-type-label"
                            id="chart-type"
                            value={chartType}
                            onChange={handleChartTypeChange}
                            label="Chart-Typ"
                        >
                            <MenuItem value="line">Line</MenuItem>
                            <MenuItem value="bar">Bar</MenuItem>
                            <MenuItem value="pie">Pie</MenuItem>
                        </Select>
                    </FormControl>
                    <SaveButtonComponent onSave={handleSaveStatus}/>
                    <SaveAsButton/>
                    <SaveDialog
                        open={saveDialogOpen}
                        title="Chart speichern"
                        message={saveMessage}
                        onClose={() => setSaveDialogOpen(false)}
                        onConfirm={handleCloseDialogAndDrawer}
                    />
                </div>
            </DrawerBox>
        </StyledDrawer>
    );
}


OptionsDrawer.propTypes = {
    chartTitle: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    setChartTitle: PropTypes.func.isRequired,
    setChartType: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default OptionsDrawer;

