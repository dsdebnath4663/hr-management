'use client'; // Add this at the top

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, InputAdornment, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications'; import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user session from localStorage
    localStorage.removeItem('token');

    // Clear user session from cookies
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax;';
    // Refresh the page
    window.location.reload();
    // Redirect to login page
    router.push('/login');
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left-aligned content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6"> Hello Robert 👋🏻 </Typography>
          <Typography variant="body2" color="textSecondary">
            Good Morning
          </Typography>
        </Box>

        {/* Right-aligned content */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search box with icon */}
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }}
          />

          {/* Ring bell icon in a square */}
          <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '8px' }}>
            <NotificationsIcon />
          </IconButton>
          {/* Dropdown with image and text */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt="Robert" src="/path-to-image.jpg" sx={{ width: 40, height: 40 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body1">Hello Robert 👋🏻</Typography>
              <Typography variant="body2" color="textSecondary">
                HR Manager
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>

            </Box>
          </Box>


        </Box>


        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit" onClick={handleLogout}>Logout</Button> */}
      </Toolbar>
    </AppBar >
  );
};

export default Navbar;
