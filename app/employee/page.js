'use client'; // Add this line to mark this component as a client component

import React, { useState } from 'react';
import {
  Container, Grid, TextField, Button, InputAdornment, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TablePagination, IconButton, Paper
} from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';
import TuneIcon from '@mui/icons-material/Tune';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./employee.css";

function EmployeeDashBoard() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sample data
  const rows = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    position: 'Position',
    department: 'Department',
    email: `employee${index + 1}@example.com`,
    phone: '123-456-7890',
    hireDate: '2024-01-01',
  }));

  return (
    <ProtectedRoute allowedRoles={['employee', 'admin']}>
      <Container sx={{ padding: '0px' }}>
        <Grid container spacing={3}>
          {/* First Row: Search Bar */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Second Row: Add New Employee and Filter */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Add New Employee Button */}
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Add New Employee
                </Button>
              </Grid>

              {/* Filter Button */}
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<TuneIcon />}
                >
                  Filter
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item xs={12}>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Position</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Hire Date</TableCell>
                      <TableCell>Actions</TableCell> {/* Column for icons */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.department}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.hireDate}</TableCell>
                        <TableCell>
                          <IconButton aria-label="view">
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton aria-label="edit">
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <div style={{ textAlign: 'left', padding: '16px' }}>
                Showing {page * rowsPerPage + 1}–{Math.min(page * rowsPerPage + rowsPerPage, rows.length)} of {rows.length} rows
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ProtectedRoute>
  );
}

export default EmployeeDashBoard;
