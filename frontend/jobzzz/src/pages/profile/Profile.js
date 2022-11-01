import React from 'react'
import Sidebar from '../../components/Sidebar'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

function Profile() {
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

export default Profile