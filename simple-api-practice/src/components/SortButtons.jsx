import { Button, Typography, Stack } from '@mui/material';

const SortButtons = ({ sortBy, sortOrder, onSort }) => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>Sort by:</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant={sortBy === 'name' ? 'contained' : 'outlined'}
          onClick={() => onSort('name')}
          sx={{ textTransform: 'none' }}
        >
          Name {sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
        </Button>
        <Button
          variant={sortBy === 'email' ? 'contained' : 'outlined'}
          onClick={() => onSort('email')}
          sx={{ textTransform: 'none' }}
        >
          Email {sortBy === 'email' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
        </Button>
      </Stack>
    </>
  );
};

export default SortButtons;
