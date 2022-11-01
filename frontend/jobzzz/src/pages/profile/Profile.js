import React from 'react'
import Sidebar from '../../components/Sidebar'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


function Profile(props) {

  return (
    <Sidebar>
        <Grid>
          <Card sx={{ maxWidth: 345 }} elevation={3}>
          <Grid item>
            <CardHeader title="Applied Jobs" />
            
            <Grid item
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={3}
 
>
        
        <Grid item>
        <Avatar alt="JP morgan logo" src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
        sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item>
            <Typography>
                JP Morgan Chase and Co
            </Typography>
            <Typography
            sx={{fontSize:15,
            display:'flex'}}>
                Software Engineer 
            </Typography>
            </Grid>
            <Grid item>
        <Avatar alt="JP morgan logo" src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
        sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item>
            <Typography>
                JP Morgan Chase and Co
            </Typography>
            <Typography
            sx={{fontSize:15,
            display:'flex'}}>
                Software Engineer 
            </Typography>
            </Grid>
           
            </Grid>
            
          </Grid>
          </Card>
          
        </Grid>
    </Sidebar>
  )
}

export default Profile;