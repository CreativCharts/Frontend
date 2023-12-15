import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import './PaginationComponent.css';
import {useDarkMode} from "../context/darkModeContext/DarkModeContext.jsx";

const PaginationComponent = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {
    const {darkMode} = useDarkMode();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
            <nav className={`pagination-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <Pagination
                        className="pagination"
                        count={totalPages}
                        page={currentPage}
                        onChange={onPageChange}
                        color="primary"
                />
            </nav>
    );
};

PaginationComponent.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
