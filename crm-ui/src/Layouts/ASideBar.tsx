import React from "react";

import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  Tooltip,
} from "@mui/material";
import menuItems from "../asidemenu";
import { Settings, PeopleAltRounded } from "@mui/icons-material";

const ASideBar = () => {
  return (
    <>
      <Drawer variant="permanent">
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disableGutters>
              <Tooltip title={item.title} placement="right" arrow>
                <IconButton color={item.color} size="medium">
                  <item.icon />
                </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ marginTop: "auto" }}>
          <ListItem disableGutters>
            <Tooltip title="HR Members" placement="right" arrow>
              <IconButton size="medium" color="success">
                <PeopleAltRounded />
              </IconButton>
            </Tooltip>
          </ListItem>
          <ListItem disableGutters>
            <Tooltip title="Settings" placement="right" arrow>
              <IconButton size="medium">
                <Settings />
              </IconButton>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default ASideBar;
