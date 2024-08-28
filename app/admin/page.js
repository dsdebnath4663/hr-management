import React from 'react';
import { Typography } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';
import EmployeeDashBoard from '../employee/page';

function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <EmployeeDashBoard />
    </ProtectedRoute>
  );
}

export default AdminPage;
