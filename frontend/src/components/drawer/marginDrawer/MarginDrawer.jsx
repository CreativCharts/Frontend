import {useState} from "react";
import PropTypes from 'prop-types';

export const MarginDrawer = (props) => {
    const [margin, setMargin] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    const {top, left, right, bottom} = margin;

    // Suppose there is a use for your variables
    return (
        <div style={{
            marginTop: top,
            marginLeft: left,
            marginRight: right,
            marginBottom: bottom
        }}>
            {props.children}
        </div>
    )
}

MarginDrawer.propTypes = {
    children: PropTypes.node.isRequired,
}
