import { Alert, AlertTitle } from '@mui/material';

const ErrorMessage = ({ message = 'missing' }) => {
  const styledAlert = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#ffb8b8',
  };

  return (
    <Alert severity="error" sx={styledAlert}>
      <AlertTitle>Error</AlertTitle>
      Details: <strong>{message}</strong>
    </Alert>
  );
};

export default ErrorMessage;
