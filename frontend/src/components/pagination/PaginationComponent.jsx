import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';

const PaginationComponent = ({total, page, onChange}) => {
    return (
        <Pagination
            count={total}
            page={page}
            onChange={onChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            sx={{
                marginTop: 2,
                justifyContent: 'center',
                display: 'flex'
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
