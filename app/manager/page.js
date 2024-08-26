// import React from 'react';
// import { Typography } from '@mui/material';

// export default function ManagerPage() {
//   return (
//     <Typography variant="h4" component="h1">
//       Manager Dashboard
//     </Typography>
//   );
// }

import React from 'react';
import { Typography } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';

function ManagerPage() {
  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <Typography variant="h4" component="h1">
        Manager Dashboard
      </Typography>
    </ProtectedRoute>
  );
}

export default ManagerPage;
