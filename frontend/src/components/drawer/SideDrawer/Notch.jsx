import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Notch = styled(Box)(({ theme }) => ({
  width: 40,
  height: 70,
  backgroundColor: theme.palette.grey[400],
  borderRadius: theme.shape.borderRadius,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  boxShadow: theme.shadows[3],
  '@media (max-width:600px)': {
    width: 30,
    height: 50,
  },
}));

function NotchComponent() {
  const theme = useTheme();

  return (
    <Notch
      sx={{
        bgcolor: theme.palette.primary.main,
      }}
    />
  );
}

export default NotchComponent;
