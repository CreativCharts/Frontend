import React from 'react';
import * as PropTypes from "prop-types";
import {IconButton} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';


class UploadButtonComponent extends React.Component {
    render() {
        let {onChange} = this.props;

        return (
                <IconButton aria-label="upload" component="label">
                    <AttachFileIcon/>
                    <input
                            type="file"
                            id="file-upload-input"
                            hidden
                            onChange={onChange}
                    />
                </IconButton>
        );
    }
}

UploadButtonComponent.propTypes = {onChange: PropTypes.any}

export default UploadButtonComponent;
