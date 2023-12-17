import PropTypes from 'prop-types';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';
import './DeleteDialog.css';

const DeleteDialog = ({open, title, message, onClose, onConfirm}) => {

    return (
        <div>
            <Dialog
                className='delete-dialog'
                open={open}
                onClose={onClose}
            >
                <DialogTitle
                    className='delete-dialog-title'
                >
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='delete-dialog-buttons'>
                    <Button
                        className='delete-cancel-button'
                        onClick={onClose}
                        color="primary"
                    >
                        Abbrechen
                    </Button>
                    <Button
                        className='delete-confirm-button'
                        onClick={onConfirm}
                        color="error"
                        autoFocus
                    >
                        Bestätigen
                    </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default DeleteDialog;
