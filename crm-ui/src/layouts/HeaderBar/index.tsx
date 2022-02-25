import React from "react";
import { AppBar, Avatar, Toolbar, Tooltip } from "@mui/material";
import { stringAvatar } from "./helpers";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import { useTranslation } from "react-i18next";

const HeaderBar = ({ user }: { user: any }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        width: "calc(100% - 40px)",
        left: "40 px",
      }}
    >
      <Toolbar>
        <HeaderTitle />
        <Tooltip
          title={t("profile") as React.ReactChild}
          arrow
          placement="bottom"
          onClick={() => {
            navigate("profile");
          }}
        >
          <Avatar
            {...stringAvatar(
              user.name + (user.surname ? " " + user.surname : "")
            )}
          />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
