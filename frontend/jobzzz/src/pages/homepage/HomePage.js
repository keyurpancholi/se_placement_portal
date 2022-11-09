import * as React from 'react';
import {useNavigate } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import WorkIcon from '@mui/icons-material/Work';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="/">
        TPO Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function HomePage() {

    const navigate=useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          <WorkIcon sx={{ mr: 2 }} />
          <Typography variant="h6"  noWrap
          sx={{fontFamily:'monospace',}}>
            Job Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={2}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/originals/19/97/f3/1997f3da28e8d29289097871f45b04fd.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize:'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={5} md={5} component={Paper} elevation={6} square>
      {/* <main> */}
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#e1f5fe',
            pt: 20,
            pb: 40,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{fontFamily:'monospace',fontWeight:'bold'}}
            >
              TPO Portal
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph
            sx={{fontFamily:'monospace',fontWeight:'bold'}}>
              Welcome to the Job Portal! 
              Click login for either admin or student 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => navigate('/admin/login')} size='large' >Admin Login</Button>
              <Button variant="contained" onClick={() => navigate('/login')} size='large'>Student Login</Button>
            </Stack>
          </Container>
        </Box>
      </Grid>
      </Grid>
      {/* End footer */}
    </ThemeProvider>
  );
}

