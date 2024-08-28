import '../../app/globals.css'
import './SideNavBar.css'
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import Link from 'next/link'; // Use this if you are using Next.js. Replace with 'react-router-dom' if using React Router.


import PeopleIcon from '@mui/icons-material/People'; // Import the People icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PaidIcon from '@mui/icons-material/Paid';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotesIcon from '@mui/icons-material/Notes';
import SettingsIcon from '@mui/icons-material/Settings';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const SideNav = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        alignItems: 'center', // Center-align items horizontally
      }}
    >

      <div className="sidenav-container">
        <div className="icon">
          <AllInclusiveIcon />
        </div>
        <div className="text">
          <span className="spaced-text">HRMS</span>
        </div>
      </div>

      <List>
        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <DashboardIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="DashBoard" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <PeopleIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <Diversity1Icon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="ALL Departments" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <EventAvailableIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Attendence" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <PaidIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <WorkIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <PeopleAltIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Candidets" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <EditNoteIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Leaves" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <NotesIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Holidays" />
        </ListItem>


        <ListItem button component={Link} href="/">
          <ListItemIcon >
            <SettingsIcon /> {/* Icon for the "All Employee" item */}
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>



      </List>
    </Drawer>
  );
};

export default SideNav;
