import React from "react";
import Sidebar from "../../components/Sidebar";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Container from '@mui/material/Container';
import { CardMedia } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from '@mui/material/colors';

function Profile(props) {
  return (
    <Sidebar>
      <Card elevation={5}>
      <CardHeader
        avatar={
          <Avatar src="/broken-image.jpg" sx={{ bgcolor: blueGrey[500] }}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title="Sakshi Pandey"
        subheader="sakshi712003@gmail.com"
      />
      <Divider />
      <CardMedia
    component="img"
    image="https://truecommerce.ecutopia.com/wp-content/uploads/2019/02/ecUtopia-Web-Vendor-Portal-Background.jpg"
    alt="profile cover image"
    height="180"
    title="profile backdrop"
  />

      </Card>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item lg={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Card fullwidth elevation={5}>
              <br />
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  justifyContent: "center",
                }}
              >
                MY INFO
              </Typography>
              <br />
              <Divider />
              <br />
              <Container>
              <Typography sx={{display:'flex',marginLeft:'5',justifyContent:'flex-start',fontFamily:'monospace'}}gutterBottom>Department</Typography>
             
              <TextField
         
          id="outlined-read-only-input"
          defaultValue="COMPUTER"
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          sx={{display:'flex'}}
        />
         </Container>
              <br />
              <br />
              <Container>
              <Typography sx={{display:'flex',marginLeft:'5',justifyContent:'flex-start',fontFamily:'monospace'}}gutterBottom>CGPA</Typography>
             
              <TextField
          id="outlined-helperText"
          variant="filled"
          defaultValue="9.36"
          sx={{display:'flex'}}
        />
        <br />
        <div
        style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch'}}>
         <Button variant="contained" sx={{bgcolor:blueGrey[500],}} size='large'>SAVE</Button>
         </div>
         <br />
         </Container>
            </Card>
          </Box>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 400 }} elevation={5}>
            <br />
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                fontFamily: "monospace",
                justifyContent: "center",
              }}
            >
              APPLIED JOBS
            </Typography>
            <br />
            <Divider />
            <List
              sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="JP morgan logo"
                    src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="JP morgan Chase and Co"
                  secondary="12 LPA"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="JP morgan logo"
                    src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="WorkIndia" secondary="20 LPA" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="JP morgan logo"
                    src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="ICICI Lombard" secondary="11 LPA" />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Sidebar>
  );
}

export default Profile;
