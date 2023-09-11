import { CircularProgress, Container } from '@mui/material';

const Loader = () => (
  <Container sx={{ display: 'grid', placeContent: 'center', mt: 5 }}>
    <CircularProgress sx={{ color: '#fff' }} />
  </Container>
);

export default Loader;
