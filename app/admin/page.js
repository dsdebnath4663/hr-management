import React from 'react';
import { Typography } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';

function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>




      <Typography variant="h4" component="h1">
        Admin Dashboard
      </Typography>
    </ProtectedRoute>
  );
}

export default AdminPage;
