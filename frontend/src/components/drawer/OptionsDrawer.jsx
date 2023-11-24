import {Drawer, TextField, Select, MenuItem, FormControl, InputLabel, Box} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import SaveButtonComponent from '../buttons/SaveButtonComponent.jsx';
import {useDarkMode} from "../context/darkModeContext/DarkModeContext.jsx";
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
    display: 'var(--drawer-display)',
    flexDirection: 'var(--drawer-flex-direction)',
    gap: theme.spacing(2),
}));

const SaveButtonStyled = styled(SaveButtonComponent)(({theme}) => ({
    marginTop: theme.spacing(2),
}));

// OptionsDrawer Komponente
const OptionsDrawer = ({
                           chartTitle,
                           setChartTitle,
                           chartDescription,
                           setChartDescription,
                           chartType,
                           setChartType,
                           saveToDatabase,
                           open,
                           onClose,
                           margins,
                           setMargins
                       }) => {
    const {darkMode} = useDarkMode();


    const handleMarginChange = (side, value) => {
        setMargins({...margins, [side]: value});
    };

    const renderMarginSettings = () => (
        <div>
            {['top', 'right', 'bottom', 'left'].map(side => (
                <TextField
                    key={side}
                    label={`${side} margin`}
                    type="number"
                    value={margins[side]}
                    onChange={(e) => handleMarginChange(side, parseInt(e.target.value, 10))}
                    fullWidth
                />
            ))}
        </div>
    );

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerBox className={darkMode ? 'darkMode' : 'lightMode'}>
                <Box display="flex" justifyContent="space-between">
                    {/* Linker Bereich */}
                    <Box flex={1} padding={2}>
                        <TextField
                            variant="outlined"
                            label="Titel"
                            placeholder="Titel"
                            value={chartTitle}
                            onChange={(e) => setChartTitle(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            label="Beschreibung"
                            placeholder="Beschreibung"
                            value={chartDescription}
                            onChange={(e) => setChartDescription(e.target.value)}
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

                    {/* Rechter Bereich */}
                    <Box flex={1} padding={2}>
                        {renderMarginSettings()}
                    </Box>
                </Box>
                <SaveButtonStyled
                    variant="contained"
                    startIcon={<SaveIcon/>}
                    onClick={saveToDatabase}
                >
                    Speichern
                </SaveButtonStyled>
            </DrawerBox>
        </StyledDrawer>
    );
};

OptionsDrawer.propTypes = {
    chartTitle: PropTypes.string,
    setChartTitle:
    PropTypes.func,
    chartDescription:
    PropTypes.string,
    setChartDescription:
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
    margins:
    PropTypes.object.isRequired,
    setMargins:
    PropTypes.func.isRequired,

};

export default OptionsDrawer;
