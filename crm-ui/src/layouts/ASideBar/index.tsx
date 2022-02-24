import React from "react";

import { Drawer, List, IconButton, ListItem, Tooltip } from "@mui/material";
import pages from "../../pagesIndex";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logout } from "@mui/icons-material";
import { logout } from "../../services/auth";

const ASideBar = ({ user }: { user: any }) => {
  const { t } = useTranslation();

  return (
    <>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: { borderRight: "none !important", paddingLeft: 1 },
        }}
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
          {user.isAdmin &&
            pages.map(
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
          <ListItem disableGutters>
            <Tooltip
              title={t("log-out") as React.ReactChild}
              placement="right"
              arrow
            >
              <IconButton color="primary" size="medium" onClick={logout}>
                <Logout />
              </IconButton>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default ASideBar;
