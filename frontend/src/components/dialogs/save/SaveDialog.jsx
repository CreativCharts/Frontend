import PropTypes from "prop-types";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from "@mui/material";
import './SaveDialog.css';

const SaveDialog = ({open, title, message, onClose, onConfirm}) => {
    return (
            <div>
                <Dialog
                        className="save-dialog"
                        open={open}
                        onClose={onClose}
                >
                    <DialogTitle className="save-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div className="save-dialog-buttons">
                            <Button
                                    className="save-cancel-button"
                                    onClick={onClose}
                                    color="primary"
                            >

                                Abbrechen
                            </Button>
                            <Button
                                    className="save-confirm-button"
                                    onClick={onConfirm}
                                    color="success"
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

SaveDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default SaveDialog;
