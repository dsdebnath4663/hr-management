'use client'; // if using app directory

import { useState } from 'react';
import { TextField, Button, Container, Typography, Alert, Box, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './login.css'
import '../../app/globals.css'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setRememberMe] = useState('');
  const [rememberMe, setError] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
      const { token, role } = response.data;

      // Store token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);



      // Set the token in cookies (for client-side)
      document.cookie = `token=${token}; path=/;`;
      // document.cookie = `token=${data.token}; path=/; SameSite=Lax;`;


      console.log("document.cookie ", document.cookie)
      // Refresh the page
      window.location.reload();
      // Redirect based on user role
      if (role === 'admin') {
        router.push('/admin');
      } else if (role === 'manager') {
        router.push('/manager');
      } else {
        router.push('/employee');
      }

      setSuccess('Login successful! Redirecting...');

      setTimeout(() => {
        // Redirection logic here
      }, 1000);


    } catch (err) {
      // alert('Error during login:' + error);
      setError('Invalid email or password' + error);
      setTimeout(() => {
        setError('');
      }, 2000); // Clear error after 3 seconds
    }
  };

  return (
    <Container maxWidth="lg" className="container">

      {error && <Alert severity="error">{error}</Alert>}

      <div className='left'>
        <img src="/undraw_Team_collaboration_re_ow29.png" />
      </div>


      <div className='right'>
        <div className="login-container">
          <div className="icon">
            <AllInclusiveIcon />
          </div>
          <div className="text">
            <span className="spaced-text">HRMS</span>
          </div>
        </div>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
          <Typography variant="h6"> Welocme 👋🏻 </Typography>
          <Typography variant="body2" color="textSecondary">
            Please login here
          </Typography>
        </Box>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          className="custom-textfield" // Apply the custom class
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          className="custom-textfield" // Apply the custom class
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box sx={{ width: '100%', textAlign: 'left', mb: 2 }} className="box-container">
          <FormControlLabel
            control={
              <Checkbox
                // checked={rememberMe}
                // onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember Me"
          />
          <Link href="/forgot-password" variant="body2" >
            <Typography variant="body2" color="textSecondary">
              Forgot Password?
            </Typography>
          </Link>
        </Box>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </div>



    </Container>
  );
}
