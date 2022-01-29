import React from "react";

import { Drawer, List, IconButton, ListItem, Tooltip } from "@mui/material";
import pages from "../../pagesIndex";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ASideBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <Drawer
        variant="permanent"
        PaperProps={{ sx: { borderRight: "none !important", paddingLeft: 1 } }}
      >
        <List>
          {pages.map(
            (item, index) =>
              item.type === "user" && (
                <ListItem key={index} disableGutters>
                  <Tooltip
                    title={t(item.title) as React.ReactChild}
                    placement="right"
                    arrow
                  >
                    <Link to={item.path}>
                      <IconButton color={item.color} size="medium">
                        <item.icon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </ListItem>
              )
          )}
        </List>

        <List sx={{ marginTop: "auto" }}>
          {pages.map(
            (item, index) =>
              item.type === "admin" && (
                <ListItem key={index} disableGutters>
                  <Tooltip
                    title={t(item.title) as React.ReactChild}
                    placement="right"
                    arrow
                  >
                    <Link to={item.path}>
                      <IconButton color={item.color} size="medium">
                        <item.icon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </ListItem>
              )
          )}
        </List>
      </Drawer>
    </>
  );
};

export default ASideBar;
