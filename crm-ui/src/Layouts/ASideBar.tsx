import React from "react";

import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  Tooltip,
} from "@mui/material";
import { Settings, PeopleAltRounded } from "@mui/icons-material";
import menuItems from "../asidemenu";
import { Link } from "react-router-dom";

const ASideBar = () => {
  return (
    <>
      <Drawer variant="permanent">
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disableGutters>
              <Tooltip title={item.title} placement="right" arrow>
                <Link to={item.path}>
                  <IconButton color={item.color} size="medium">
                    <item.icon />
                  </IconButton>
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ marginTop: "auto" }}>
          <ListItem disableGutters>
            <Tooltip title="HR Members" placement="right" arrow>
              <Link to="/hr-members">
                <IconButton size="medium" color="success">
                  <PeopleAltRounded />
                </IconButton>
              </Link>
            </Tooltip>
          </ListItem>
          <ListItem disableGutters>
            <Tooltip title="Settings" placement="right" arrow>
              <Link to="/settings">
                <IconButton size="medium">
                  <Settings />
                </IconButton>
              </Link>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default ASideBar;
