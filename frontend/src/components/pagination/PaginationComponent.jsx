import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import PropTypes from 'prop-types';
import './PaginationComponent.css';

const PaginationComponent = ({ total, page, onChange }) => {
    return (
        <Pagination
            count={total}
            page={page}
            onChange={onChange}
            size="large"
            showFirstButton
            showLastButton
            className="pagination-root"
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    className={`pagination-item ${item.page === page ? 'pagination-item-selected' : ''}`}
                />
            )}
        />
    );
};

PaginationComponent.propTypes = {
    total: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default PaginationComponent;
