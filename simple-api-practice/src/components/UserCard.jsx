import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {user.name}
        </Typography>
        <Typography 
          color="primary" 
          variant="body2" 
          sx={{ mb: 1 }}
        >
          @{user.username}
        </Typography>
        <Typography 
          color="success.main" 
          variant="body2" 
          sx={{ mb: 2 }}
        >
          {user.email}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Website:</strong> {user.website}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Company:</strong> {user.company.name}
        </Typography>
        <Typography variant="body2">
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
