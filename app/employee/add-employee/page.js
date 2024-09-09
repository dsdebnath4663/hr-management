'use client'
import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Typography, Container, TextField, FormControl, InputLabel, Select, MenuItem, Card, CardContent, IconButton } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';
import '../../globals.css'
import '.././employee.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkIcon from '@mui/icons-material/Work';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LockIcon from '@mui/icons-material/Lock';
import UploadIcon from '@mui/icons-material/Upload';
import CardComponent from '@/components/card/CardComponent';
import SideNavigationTabs from '@/components/tab/SideNavigationTabs';

const AddEmployee = () => {
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
      <Box className="box">

        <Box sx={{ padding: 2, width: '80%' }}>

          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            centered
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

          {activeTab === 0 && <Typography>

            <Container maxWidth="lg" className="container">
              <span class="left-text">Left Text


                <TextField
                  label="Fast Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  // value={email}
                  className="custom-textfield" // Apply the custom class
                />


                <TextField
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of birth"
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
              <span class="space"></span>
              <span class="right-text">Right Text

                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  // value={email}
                  className="custom-textfield" // Apply the custom class
                />


                <TextField
                  label="Email Address "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />

                <FormControl fullWidth>
                  <InputLabel id="dropdown-label">Marital status</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">single</MenuItem>
                    <MenuItem value="option2">married</MenuItem>
                    <MenuItem value="option3">divorced</MenuItem>
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
                    <MenuItem value="option3">Koreans</MenuItem>
                    <MenuItem value="option3">Sotho</MenuItem>
                    <MenuItem value="option3">Filipinos</MenuItem>
                  </Select>
                </FormControl>
              </span>


            </Container>
            <div className='text-field'>
              <TextField
                label=" Address "
                variant="outlined"
                fullWidth
                margin="normal"

                className="custom-textfield" // Apply the custom class
              />
            </div>
            <Container maxWidth="lg" className="container conatiner-margin">
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
                    <MenuItem value="option1">700 010</MenuItem>
                    <MenuItem value="option2">700 054</MenuItem>
                    <MenuItem value="option3">	700 025</MenuItem>
                    <MenuItem value="option3">	700 066</MenuItem>
                    <MenuItem value="option3">700 019</MenuItem>
                    <MenuItem value="option3">700 </MenuItem>
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
                    <MenuItem value="option3">Koreans</MenuItem>
                    <MenuItem value="option3">Sotho</MenuItem>
                    <MenuItem value="option3">Filipinos</MenuItem>
                  </Select>
                </FormControl>
              </span>


            </Container>
          </Typography>}
          {activeTab === 1 && <Typography>About Content
            <Container maxWidth="lg" className="container">
              <span class="left-text">Left Text





                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Select Employee Type / Role</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">HR</MenuItem>
                    <MenuItem value="option2">Manager</MenuItem>
                    <MenuItem value="option3">Employee</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Select Department</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">Data Science</MenuItem>
                    <MenuItem value="option2">Cyber Security.</MenuItem>
                    <MenuItem value="option3">Cloud Computing</MenuItem>
                    <MenuItem value="option4">Artificial Intelligence</MenuItem>

                  </Select>
                </FormControl>


                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Select Working Days</InputLabel>
                  <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Option"
                  >
                    <MenuItem value="option1">Monday</MenuItem>
                    <MenuItem value="option2">Tuesday</MenuItem>
                    <MenuItem value="option3">Wednesday</MenuItem>
                    <MenuItem value="option1">Thursday</MenuItem>
                    <MenuItem value="option2">Friday</MenuItem>
                    <MenuItem value="option3">Saturday</MenuItem>
                    <MenuItem value="option3">Sunday</MenuItem>
                  </Select>
                </FormControl>


              </span>
              <span class="space"></span>
              <span class="right-text">Right Text

                <TextField
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  // value={email}
                  className="custom-textfield" // Apply the custom class
                />



                <TextField
                  label="Enter Designation "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Joining Date  "
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>


              </span>


            </Container>

            <Container maxWidth="lg" className="container conatiner-margin">
              <span className='span-width'>
                <FormControl fullWidth className='dropdown'>
                  <InputLabel id="dropdown-label">Select Office Location</InputLabel>
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

            </Container>
          </Typography>}
          {activeTab === 2 && <Typography><CardComponent />  </Typography>}

          {activeTab === 3 && <Typography>Settings Content
            <Container maxWidth="lg" className="container conatiner-margin">

              <span class="left-text">Left Text
                <TextField
                  label="Enter Email Address "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />


                <TextField
                  label="Enter Skype id "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />



              </span>
              <span class="right-text">Right Text


                <TextField
                  label="Enter Slak Id "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />

                <TextField
                  label="Enter GitHub "
                  variant="outlined"
                  fullWidth
                  margin="normal"

                  className="custom-textfield" // Apply the custom class
                />


              </span>




              1
            </Container>
          </Typography>}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" onClick={handlePrevious} disabled={activeTab === 0}>
              Previous
            </Button>
            {/* <Button variant="contained" onClick={handleNext} disabled={activeTab === 3}>
              Next
            </Button> */}
            {activeTab !== 3 ? (
              <Button variant="contained" onClick={handleNext} disabled={activeTab === 3}>
                Next
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                ADD
              </Button>
            )}
          </Box>
        </Box>


      </Box>
    </ProtectedRoute>
    // <SideNavigationTabs />

  );
};

export default AddEmployee;
