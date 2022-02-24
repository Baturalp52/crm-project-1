import React, { useState } from "react";

import { Drawer, List, IconButton, ListItem, Tooltip } from "@mui/material";
import pages from "../../pagesIndex";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pageRedux } from "../../redux";
import { Logout } from "@mui/icons-material";
import { logout } from "../../services/auth";
import BaseService from "../../services";
import Loading from "../../components/Loading";

const ASideBar = () => {
  const { t } = useTranslation();
  const { getState, dispatch, subscribe } = pageRedux;
  const [user, setUser] = useState(getState().user);

  subscribe(() => {
    setUser(getState().user);
  });

  if (!user) {
    BaseService.get("users").then((res) => {
      dispatch({
        type: "CHANGE_USER",
        payload: { user: res.data.user },
      });
    });
  }

  return user ? (
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
  ) : (
    <Loading />
  );
};

export default ASideBar;
