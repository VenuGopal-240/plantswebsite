import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, DialogContent, DialogTitle } from '@mui/material';
import {  Dialog, DialogActions,  Menu, MenuItem, Switch } from "@mui/material";
import DoctorList from '../../A_DoctorMan/DoctorModule.jsx/DoctorList';
import DoctorForm from '../../A_DoctorMan/DoctorModule.jsx/DoctorForm';
import MedicineList from '../../A_DoctorMan/DoctorModule.jsx/MedicineList';
import AddMedicineList from '../../A_DoctorMan/DoctorModule.jsx/AddMedicine';
import MedicationIcon from '@mui/icons-material/Medication';

// import { Dialog } from './Dialogs';/

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

 const MiniDrawer=()=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [data,setData] = React.useState(['Medicine_list']);
  const useDate=React.useRef();
  const [newDoctor,setNewDoctor] = React.useState(false);
  const doctorsLists = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        gender: "Female",
        age: 40,
        specialization: "Cardiologist",
        experience: 15,
        contact: "123-456-7890",
        email: "sarah.johnson@example.com",
        location: "New York, NY",
    },
    {
        id: 2,
        name: "Dr. James Smith",
        gender: "Male",
        age: 45,
        specialization: "Orthopedic Surgeon",
        experience: 18,
        contact: "987-654-3210",
        email: "james.smith@example.com",
        location: "Los Angeles, CA",
    },
    {
        id: 3,
        name: "Dr. Emily Brown",
        gender: "Female",
        age: 38,
        specialization: "Pediatrician",
        experience: 12,
        contact: "555-123-4567",
        email: "emily.brown@example.com",
        location: "Chicago, IL",
    },
    {
        id: 4,
        name: "Dr. Michael Davis",
        gender: "Male",
        age: 50,
        specialization: "Neurologist",
        experience: 22,
        contact: "444-987-6543",
        email: "michael.davis@example.com",
        location: "Houston, TX",
    },
    {
        id: 5,
        name: "Dr. Olivia Wilson",
        gender: "Female",
        age: 35,
        specialization: "Dermatologist",
        experience: 10,
        contact: "666-222-3333",
        email: "olivia.wilson@example.com",
        location: "Phoenix, AZ",
    },
    {
        id: 6,
        name: "Dr. William Martinez",
        gender: "Male",
        age: 48,
        specialization: "Gastroenterologist",
        experience: 20,
        contact: "999-888-7777",
        email: "william.martinez@example.com",
        location: "Philadelphia, PA",
    },
    {
        id: 7,
        name: "Dr. Sophia Anderson",
        gender: "Female",
        age: 42,
        specialization: "Oncologist",
        experience: 16,
        contact: "111-222-3333",
        email: "sophia.anderson@example.com",
        location: "San Antonio, TX",
    },
    {
        id: 8,
        name: "Dr. Benjamin Thomas",
        gender: "Male",
        age: 37,
        specialization: "Psychiatrist",
        experience: 12,
        contact: "222-333-4444",
        email: "benjamin.thomas@example.com",
        location: "San Diego, CA",
    },
    {
        id: 9,
        name: "Dr. Isabella Moore",
        gender: "Female",
        age: 34,
        specialization: "Gynecologist",
        experience: 9,
        contact: "333-444-5555",
        email: "isabella.moore@example.com",
        location: "Dallas, TX",
    },
    {
        id: 10,
        name: "Dr. Henry White",
        gender: "Male",
        age: 52,
        specialization: "General Physician",
        experience: 25,
        contact: "777-888-9999",
        email: "henry.white@example.com",
        location: "San Jose, CA",
    },
];
  const [doctorsList,setDoctorList] = React.useState(doctorsLists);
  const [render,setRender] = React.useState("Doctor_list");
  const medicineslist = [
    { name: "Paracetamol", rate: 25, quantity: 100, available: true, expiryDate: "2025-12-31", category: "Analgesic" },
    { name: "Amoxicillin", rate: 50, quantity: 50, available: true, expiryDate: "2026-06-15", category: "Antibiotic" },
    { name: "Cough Syrup", rate: 80, quantity: 30, available: false, expiryDate: "2024-11-20", category: "Cold and Cough" },
    { name: "Aspirin", rate: 20, quantity: 200, available: true, expiryDate: "2025-03-10", category: "Analgesic" },
    { name: "Insulin", rate: 300, quantity: 15, available: true, expiryDate: "2025-01-15", category: "Diabetes" },
    { name: "Vitamin C", rate: 60, quantity: 75, available: true, expiryDate: "2027-05-30", category: "Supplement" },
    { name: "Ibuprofen", rate: 40, quantity: 120, available: true, expiryDate: "2026-02-28", category: "Anti-inflammatory" },
    { name: "Cetirizine", rate: 15, quantity: 90, available: true, expiryDate: "2025-08-25", category: "Antihistamine" },
    { name: "Antacid", rate: 35, quantity: 10, available: false, expiryDate: "2024-09-15", category: "Digestive" },
    { name: "Hydroxychloroquine", rate: 150, quantity: 40, available: true, expiryDate: "2026-11-10", category: "Antimalarial" },
  ];

  const [medicines,setMedicines] = React.useState(medicineslist);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose=()=>{
    setOpenDialog(false);
  }
  const handleAdd=()=>{
    console.log(useDate.current);
    setData([...data,useDate.current]);
    setOpenDialog(false);
  }

  const handleData=(text)=>{
    console.log("data",text);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Doctor Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
        <List>
          {['Doctor_list','Doctor_Status'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              
              <ListItemButton
               onClick={() => setRender(text)} // Handle click here
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button onClick={()=>setNewDoctor(true)}>Add New Doctor</Button>  
        <Divider />
       
        <List>
          {data?.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
               onClick={() => setRender(text)} 
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <MedicationIcon /> : <MedicationIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button onClick={()=>setOpenDialog(true)}>Add Medicines </Button>
      </Drawer>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>

        <AddMedicineList setMedicines={setMedicines} medicines={medicines} setOpenDialog={setOpenDialog}/>
        
      </Dialog>

      <Dialog open={newDoctor} onClose={handleClose}>
        <DialogTitle>Add New Doctor</DialogTitle>
          <DoctorForm doctorsList={doctorsList} setDoctorList={setDoctorList} setNewDoctor={setNewDoctor}/>
      </Dialog>
      {
        render === 'Doctor_list' && <DoctorList doctorsList={doctorsList} setDoctorList={setDoctorList}/>
      }
      {
         render ==='Medicine_list' && <MedicineList medicines={medicines} setMedicines={setMedicines} />
      }
          
    </Box>
    
    
  );
}

export default MiniDrawer;