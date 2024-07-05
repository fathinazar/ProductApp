
import { AppBar, Box, Typography, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCT APPLICATION
          </Typography>
          <Link to='/'><Button style={{ color: 'white' }}>Home</Button></Link>
          <Link to='/add-product'><Button style={{ color: 'white' }}>Add Product</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
