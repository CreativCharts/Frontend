import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const SaveDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Speichern abgeschlossen</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Die Änderungen wurden erfolgreich gespeichert.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Schließen
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SaveDialog;
