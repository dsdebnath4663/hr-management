'use client'; // Ensure this is at the top

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CircularProgress } from '@mui/material';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthorization = () => {
      const token = localStorage.getItem('token');
      const userRole = localStorage.getItem('role'); // Replace with role extraction logic

      if (token && allowedRoles.includes(userRole)) {
        setAuthorized(true);
      } else {
        router.push('/404'); // Redirect to 404 if not authorized
      }
      setLoading(false);
    };

    // Ensure `localStorage` access is done in a client-side environment
    if (typeof window !== 'undefined') {
      checkAuthorization();
    }
  }, [router, allowedRoles]);

  if (loading) return (<div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, // Ensure it overlays other content
  }}>
    <CircularProgress size={200} thickness={2} color="secondary" />
  </div>);

  return authorized ? children : null; // Render children if authorized
};

export default ProtectedRoute;
