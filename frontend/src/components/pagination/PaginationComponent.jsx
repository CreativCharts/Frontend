import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import {useDarkMode} from "../context/darkModeContext/DarkModeContext.jsx";

const PaginationComponent = ({ total, page, onChange }) => {
    const {darkMode} = useDarkMode();

    const paginationStyles = {
        backgroundColor: darkMode ? '#303030' : '#fff',
        color: darkMode ? '#fff' : '#303030'
    }

    return (
        <Pagination
            count={total}
            page={page}
            onChange={onChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            style={paginationStyles}
            sx={{
                marginTop: 2,
                justifyContent: 'center',
                display: 'flex',
                '.MuiPaginationItem-root': {
                    color: '#1976d2',
                    '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                    '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: '#1976d2',
                    }
                },
                '.MuiPaginationItem-ellipsis': {
                    color: 'gray',
                },
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
                borderRadius: '4px',
                padding: '10px',
            }}
        />
    );
};

PaginationComponent.propTypes = {
    total: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default PaginationComponent;
