import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Button, Container, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/Work';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LockIcon from '@mui/icons-material/Lock';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import AdapterDayjs from '@mui/x-date-pickers/AdapterDayjs';

const SideNavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handlePrevious = () => {
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  const handleNext = () => {
    if (activeTab < 3) setActiveTab(activeTab + 1);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Side Navigation */}
      <Box sx={{ width: 240, bgcolor: 'background.paper', borderRight: '1px solid #ddd' }}>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          aria-label="Side navigation tabs"
        >
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonOutlineIcon sx={{ marginRight: 1 }} /> Personal Information
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkIcon sx={{ marginRight: 1 }} /> Professional Information
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextSnippetIcon sx={{ marginRight: 1 }} /> Documents
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockIcon sx={{ marginRight: 1 }} /> Account Access
              </Box>
            }
          />
        </Tabs>
      </Box>

      {/* Content Area */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {activeTab === 0 && (
          <Typography>
            <Container maxWidth="lg" className="container">
              <span className="left-text">Left Text
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="custom-textfield"
                />
                <TextField
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="custom-textfield"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Gender</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">Male</MenuItem>
                    <MenuItem value="option2">Female</MenuItem>
                    <MenuItem value="option3">Transgender</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className="space"></span>
              <span className="right-text">Right Text
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="custom-textfield"
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="custom-textfield"
                />
                <FormControl fullWidth>
                  <InputLabel id="dropdown-label">Marital Status</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">Single</MenuItem>
                    <MenuItem value="option2">Married</MenuItem>
                    <MenuItem value="option3">Divorced</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">State</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">India</MenuItem>
                    <MenuItem value="option2">Japanese</MenuItem>
                    <MenuItem value="option3">Lao</MenuItem>
                    <MenuItem value="option4">Koreans</MenuItem>
                    <MenuItem value="option5">Sotho</MenuItem>
                    <MenuItem value="option6">Filipinos</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </Container>
            <div className='text-field'>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                className="custom-textfield"
              />
            </div>
            <Container maxWidth="lg" className="container container-margin">
              <span className='span-width'>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">City</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">New York</MenuItem>
                    <MenuItem value="option2">Los Angeles</MenuItem>
                    <MenuItem value="option3">Chicago</MenuItem>
                    <MenuItem value="option4">Houston</MenuItem>
                    <MenuItem value="option5">Phoenix</MenuItem>
                    <MenuItem value="option6">Philadelphia</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className='span-width'>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Zip Code</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">10001</MenuItem>
                    <MenuItem value="option2">90001</MenuItem>
                    <MenuItem value="option3">60601</MenuItem>
                    <MenuItem value="option4">77001</MenuItem>
                    <MenuItem value="option5">85001</MenuItem>
                    <MenuItem value="option6">19101</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className='span-width'>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Nationality</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">India</MenuItem>
                    <MenuItem value="option2">Japanese</MenuItem>
                    <MenuItem value="option3">Lao</MenuItem>
                    <MenuItem value="option4">Koreans</MenuItem>
                    <MenuItem value="option5">Sotho</MenuItem>
                    <MenuItem value="option6">Filipinos</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </Container>
          </Typography>
        )}
        {activeTab === 1 && <Typography>Professional Information Content</Typography>}
        {activeTab === 2 && <Typography><CardComponent /></Typography>}
        {activeTab === 3 && <Typography>Settings Content</Typography>}
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
  );
};

export default SideNavigationTabs;
