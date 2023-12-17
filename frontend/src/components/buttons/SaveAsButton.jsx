import IconButton from "@mui/material/IconButton";
import SaveAsIcon from "@mui/icons-material/SaveAlt";

function SaveAsButton() {
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

            <SaveAsIcon
                sx={{
                    fontSize: 100,
                }}
            />
        </IconButton>
    );
}

export default SaveAsButton;
