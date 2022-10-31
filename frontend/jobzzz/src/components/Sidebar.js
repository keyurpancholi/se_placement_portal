import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Container from '@mui/material/Container'; 
import './Sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Sidebar({children}) {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems =[
        {
         text: 'Jobs',
         icon: <WorkIcon color="white" />,
         path: '/jobs',
        } ,
        {
         text: 'Add New Job',
         icon: <AddCircleIcon color="white" />,
         path: '/addJob'
        },
        {
            text: 'Profile',
         icon: <AccountBoxIcon color="white" />,
         path: '/profile'
        },{
          text: 'Logout',
         icon: <LogoutIcon color="white" />,
         path: '/'
        }
     ]

  return (
    <div className='root'>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#e1f5fe'
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h5" 
               sx={{fontFamily:'initial',
               marginLeft:1,
               marginTop:2,
               marginBottom:2,}}>
                    TPO Portal
                </Typography>
        <Divider />
        <List>
            {menuItems.map(item => (
                <>
                <ListItem  
                button 
                key={item.text}
                onClick={() => {navigate(item.path)}}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItem>
                </>
            ))}
        </List>
      </Drawer>
      <br />
         <div className='page'>
            <Container
            sx={{marginTop:10}}>
            {children}
            </Container>
       
    </div>
    </div>
  )
}

export default Sidebar