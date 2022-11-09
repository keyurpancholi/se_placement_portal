import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WorkIcon from "@mui/icons-material/Work";
import { Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import "./Sidebar.css";
import { white } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // ADMIN SIDEBAR
  const menuItems1 = [
    {
      text: "Jobs",
      icon: <WorkIcon color="white" />,
      path: "/jobs",
      action: "jobs",
    },
    {
      text: "Add New Job",
      icon: <AddCircleIcon color="white" />,
      path: "/addJob",
      action: "addJob",
    },
    // {
    //   text: "Profile",
    //   icon: <AccountBoxIcon color="white" />,
    //   path: "/profile",
    //   action: "profile",
    // },
    {
      text: "Logout",
      icon: <LogoutIcon color="white" />,
      path: "/",
      action: "logout",
    },
  ];

  // USER SIDEBAR
  const menuItems2 = [
    {
      text: "Jobs",
      icon: <WorkIcon color="white" />,
      path: "/jobs",
      action: "jobs",
    },
    // {
    //   text: "View applied Jobs",
    //   icon: <AddCircleIcon color="white" />,
    //   path: "/viewAppliedJobs",
    //   action: "View jobs",
    // },
    {
      text: "Profile",
      icon: <AccountBoxIcon color="white" />,
      path: "/profile",
      action: "profile",
    },
    {
      text: "Logout",
      icon: <LogoutIcon color="white" />,
      path: "/",
      action: "logout",
    },
  ];

  const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      bgcolor: "rgba(255, 255, 255, 0.08)",
    },
  };

  const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
  };

  return (
    <div className="root">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#101F33",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Typography
          variant="h5"
          sx={{
            fontFamily: "initial",
            marginLeft: 1,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          TPO Portal
        </Typography> */}

        {/* <Divider /> */}

        <List>
          <ListItem
            sx={{
              ...item,
              ...itemCategory,
              fontSize: 22,
              color: "#ffff",
              fontFamily: "inherit",
            }}
          >
            TPO PORTAL
          </ListItem>
          <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemIcon sx={{ color: "#ffff" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#ffff" }}>Placement</ListItemText>
          </ListItem>

          <Divider sx={{ color: "#fff" }} />
          <List>
            {props.isAdmin &&
              menuItems1.map((item) => (
                <>
                  <ListItem
                    button
                    key={item.text}
                    sx={{
                      color: "#fff",
                      "&:hover, &:focus": {
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                    onClick={() => {
                      if (item.action === "logout") {
                        localStorage.removeItem("userId");
                        localStorage.removeItem("token");
                        navigate(item.path);
                        props.isLogout();
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </>
              ))}
            {!props.isAdmin &&
              menuItems2.map((item) => (
                <>
                  <ListItem
                    button
                    key={item.text}
                    sx={{
                      color: "#fff",
                      "&:hover, &:focus": {
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                    onClick={() => {
                      if (item.action === "logout") {
                        localStorage.removeItem("userId");
                        localStorage.removeItem("token");
                        navigate(item.path);
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </>
              ))}
          </List>
        </List>
      </Drawer>
      <br />
      <div className="page">
        <Container sx={{ marginTop: 10 }}>{props.children}</Container>
      </div>
    </div>
  );
}

export default Sidebar;
