import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";


const CreateButton = ({to, icon}) => {
    const navigate = useNavigate();

    return (

        <Button
            className="create-button-fab"
            component={Link}
            to={to}
            startIcon={icon}
            onClick={() => navigate(`/editor/create`)}
        >
            Create
        </Button>
    );
}

CreateButton.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default CreateButton;
