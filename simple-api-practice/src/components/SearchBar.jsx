import { TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <TextField
      size="small"
      placeholder="Search by name, email, or username..."
      value={searchTerm}
      onChange={onSearch}
      sx={{
        width: '250px',
        '& .MuiInputBase-root': {
          padding: '0 8px'
        }
      }}
      InputProps={{
        startAdornment: <SearchIcon sx={{ mr: 0.5 }} />
      }}
    />
  );
};

export default SearchBar;
