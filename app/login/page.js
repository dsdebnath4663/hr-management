'use client'; // if using app directory

import { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
