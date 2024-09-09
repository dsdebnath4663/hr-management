'use client'
import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Typography, Container, TextField, FormControl, InputLabel, Select, MenuItem, Card, CardContent, IconButton } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';
// import '../../globals.css';
// import '.././employee.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/Work';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LockIcon from '@mui/icons-material/Lock';
import UploadIcon from '@mui/icons-material/Upload';
import CardComponent from '@/components/card/CardComponent';

const SideNavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  const handleNext = () => {
    if (activeTab < 3) {
      setActiveTab(prevTab => prevTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(prevTab => prevTab - 1);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ProtectedRoute allowedRoles={['employee', 'admin']}>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: '250px' }}
          className="custom-tabs"
        >
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonOutlineIcon sx={{ marginRight: 1 }} />Personal Information
              </Box>
            }
            className="custom-tab"
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkIcon sx={{ marginRight: 1 }} />Professional Information
              </Box>
            }
            className="custom-tab"
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextSnippetIcon sx={{ marginRight: 1 }} />Documents
              </Box>
            }
            className="custom-tab"
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockIcon sx={{ marginRight: 1 }} />Account Access
              </Box>
            }
            className="custom-tab"
          />
        </Tabs>

        <Box sx={{ flexGrow: 1, p: 3 }}>
          {activeTab === 0 && (
            <Typography>
              <Container maxWidth="lg" className="container">
                Personal Information Content
              </Container>
            </Typography>
          )}
          {activeTab === 1 && <Typography>Professional Information Content</Typography>}
          {activeTab === 2 && <Typography>Documents  </Typography>}
          {activeTab === 3 && <Typography>Account Access Content</Typography>}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" onClick={handlePrevious} disabled={activeTab === 0}>
              Previous
            </Button>
            <Button variant="contained" onClick={handleNext} disabled={activeTab === 3}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
};


export default SideNavigationTabs;
