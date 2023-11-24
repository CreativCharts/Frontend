import React from 'react';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const UploadButtonComponent = ({ onChange }) => {
    return (
        <IconButton aria-label="upload" component="label">
            <AttachFileIcon />
            <input
                type="file"
                id="file-upload-input"
                hidden
                onChange={onChange}
            />
        </IconButton>
    );
};

export default UploadButtonComponent;
