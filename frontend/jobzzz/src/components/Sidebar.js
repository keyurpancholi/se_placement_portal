import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Container from '@mui/material/Container'; 
import './Sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';


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
        },{
          text: 'Applied students',
         icon: <LogoutIcon color="white" />,
         path: '/admin/appliedStudents'
        }
     ]

     const item = {
      py: '2px',
      px: 3,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
      },
    };
    
    const itemCategory = {
      boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
      py: 1.5,
      px: 3,
    };
    

  return (
    <div className='root'>

        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#101F33'
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
      <List>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#ffff',fontFamily:'inherit' }}>
         TPO PORTAL
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon sx={{color:'#ffff'}}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{color:'#ffff'}}>Placement</ListItemText>
        </ListItem>
       
        <Divider sx={{color:'#fff'}}/>
        <List>
            {menuItems.map(item => (
                
                <ListItem  
                button 
                key={item.text}
                onClick={() => {navigate(item.path)}}
                sx={{ color: '#fff', 
                '&:hover, &:focus': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',}  }}
                >
                
                    <ListItemIcon 
                    sx={{ color: '#fff',}}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItem>

            ))}
        </List>
     </List>
      </Drawer>

      <br />
         <div className='page'>
            <Container
            sx={{marginTop:10,}}>
            {children}
            </Container>
       
    </div>
    </div>
  )
}

export default Sidebar