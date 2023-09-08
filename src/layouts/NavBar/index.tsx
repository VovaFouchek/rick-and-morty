import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#fff' }}>
        <Toolbar variant="dense" sx={{ minHeight: '60px' }}>
          <img src={logo} alt="Logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
