import PropTypes from "prop-types";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';
import './SaveDialog.css';

const SaveDialog = ({open, title, message, onClose, onConfirm}) => {
    return (
        <div>
            <Dialog
                className='save-dialog'
                open={open}
                onClose={onClose}
            >
                <DialogTitle
                    className='save-dialog-title'
                >{title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        className='save-dialog-button'
                        onClick={onConfirm}
                        autoFocus
                        justify-content="center"
                        variant="contained"
                        color="success"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

SaveDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default SaveDialog;
