import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '300px', 
      gap: 2 
    }}>
      <CircularProgress />
      <Typography>Loading data...</Typography>
    </Box>
  );
};

export default Loading;
