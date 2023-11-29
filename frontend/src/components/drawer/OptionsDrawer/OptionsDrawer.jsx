import {Drawer, TextField, Select, MenuItem, FormControl, InputLabel, Box, Tooltip} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import SaveButtonComponent from '../../buttons/SaveButtonComponent.jsx';
import SaveDialog from "../../dialogs/SaveDialog.jsx";
import {useDarkMode} from "../../context/darkModeContext/DarkModeContext.jsx";
import './OptionsDrawer.css';
import {useState} from "react";
import {Info} from "@mui/icons-material";


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
//     drawer soll in mehrere Bereiche aufgeteilt werden um
//     weitere features hinzufügen zu können & bis dahin
//     coming soon text anzeigen in 3 verschiedenen Bereichen
//     als 33% 33% 33% aufgeteilt
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
    '& .left': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    '& .right': {
        width: '100%',
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
        width: '100%',
    },
    '& .MuiFormControl-root': {
        width: '100%',
    },
    '& .MuiInputLabel-root': {
        width: '100%',
    }
}));

const SaveButtonStyled =
    styled(SaveButtonComponent)(({theme}) => ({
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }));


// OptionsDrawer Komponente
const OptionsDrawer = ({
                           chartTitle,
                           setChartTitle,
                           chartType,
                           setChartType,
                           saveToDatabase,
                           open,
                           onClose
                       }) => {
    const {darkMode} = useDarkMode();
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);


    const handleSaveToDatabase = () => {
        saveToDatabase();
        setSaveDialogOpen(true);
    }
    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerBox className={darkMode ? 'darkMode' : 'lightMode'}>
                <Box display="flex" justifyContent="space-between">
                    {/* Linker Bereich */}
                    <Box display="flex" flexDirection="column" gap={2} className={'left'}>
                        <TextField
                            variant="outlined"
                            label="Titel"
                            placeholder="Titel"
                            value={chartTitle}
                            onChange={(e) => setChartTitle(e.target.value)}
                            fullWidth
                        />
                        <FormControl fullWidth>
                            <InputLabel>Chart Type</InputLabel>
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
                    </Box>
                    {/* Mittlerer Bereich */}
                    <div className={'middle'}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Tooltip title="Color Picker for Charts coming soon
                        Stay tuned for more updates!" arrow placement="top">
                                <Info sx={{color: 'primary.main'}}>
                                    Color Picker for Charts coming soon
                                </Info>
                            </Tooltip>
                        </Box>
                    </div>

                    {/* Rechter Bereich */}
                    <div className={'right'}>
                        <Box display="flex" flexDirection="column" gap={2} className={'middle'}
                             height='33%' width='33%'
                        >
                            <Tooltip title="Margin would be editable here soon!" arrow placement="top">
                                <Info sx={{color: 'primary.main'}}>
                                    Margin would be editable here soon
                                </Info>
                            </Tooltip>
                        </Box>
                    </div>

                </Box>
                <SaveButtonStyled
                    variant="contained"
                    startIcon={<SaveIcon/>}
                    onClick={handleSaveToDatabase}
                >
                    Speichern
                </SaveButtonStyled>

                <SaveDialog open={saveDialogOpen} onClose={() =>
                    setSaveDialogOpen(false)}/>
            </DrawerBox>
        </StyledDrawer>
    );
}


OptionsDrawer.propTypes = {
    chartTitle: PropTypes.string,
    setChartTitle:
    PropTypes.func,
    chartType:
    PropTypes.string.isRequired,
    setChartType:
    PropTypes.func.isRequired,
    saveToDatabase:
    PropTypes.func.isRequired,
    open:
    PropTypes.bool.isRequired,
    onClose:
    PropTypes.func.isRequired,
};

export default OptionsDrawer;
