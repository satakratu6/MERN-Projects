import { Box, Alert, Button } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';

const Error = ({ error, onRetry }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '300px', 
      gap: 2, 
      p: 3 
    }}>
      <Alert severity="error">{error}</Alert>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<RefreshIcon />} 
        onClick={onRetry}
      >
        Retry
      </Button>
    </Box>
  );
};

export default Error;
