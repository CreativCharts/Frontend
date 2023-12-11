import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton() {
    return (
        <IconButton

            color="primary"
            aria-label="delete"
            sx={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                zIndex: '1',
            }}
        >

            <DeleteIcon
                sx={{
                    fontSize: 100,
                }}
            />
        </IconButton>
    );
}

export default DeleteButton;
