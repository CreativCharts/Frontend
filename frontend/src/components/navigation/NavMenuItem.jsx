import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

const NavMenuItem = ({handleClose, label}) => {
    return (
        <MenuItem onClick={handleClose} component={Link} to={`/${label.toLowerCase()}`}>
            {label}
        </MenuItem>
    );
}

NavMenuItem.propTypes = {
    handleClose: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default NavMenuItem;
