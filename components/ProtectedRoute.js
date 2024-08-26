'use client'; // Ensure this is at the top

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Replace with role extraction logic

    if (token && allowedRoles.includes(userRole)) {
      setAuthorized(true);
    } else {
      router.push('/404'); // Redirect to 404 if not authorized
    }
    setLoading(false);
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return authorized ? children : null; // Render children if authorized
};

export default ProtectedRoute;
