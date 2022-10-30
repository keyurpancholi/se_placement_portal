import React from 'react'
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Sidebar from '../../components/Sidebar';
import Grid from '@mui/material/Grid';
import JobDetails from '../../components/jobDetails/JobDetails';
import {useNavigate } from 'react-router-dom'; 

function Job() {
  const navigate = useNavigate();
  return (
    <Sidebar>
   <Container>
    <Card elevation={3}>
        <CardContent>
        
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    <Grid item>
    <Grid
  container
  direction="row"
  justifyContent="flex-start"
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
            </Grid>
            </Grid>
            <Grid item>
            <Button variant="contained"
            onClick={() => navigate('/jobDetails')}
            sx={{display:'flex',
            justifyContent:'flex-end',
            }}
            startIcon={<CurrencyRupeeIcon />}
            >12 LPA</Button>
            <Typography>Technical</Typography>
            </Grid>
        </Grid>
        </CardContent>
    </Card>
   </Container>
   </Sidebar>
   
  )
}

export default Job
