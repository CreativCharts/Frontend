import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import PropTypes from 'prop-types';
import './PaginationComponent.css';

const PaginationComponent = ({total, page, onChange}) => {

    return (

        <Pagination className="pagination-root"
                    count={total}
                    page={page}
                    onChange={onChange}
                    size="large"
                    showFirstButton
                    showLastButton
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
