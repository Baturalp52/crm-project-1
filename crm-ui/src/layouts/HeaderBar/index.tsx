import React from "react";
import { AppBar, Avatar, Toolbar, Tooltip } from "@mui/material";
import SearchInput from "../../components/SearchInput";
import { stringAvatar } from "./helpers";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();
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
        <SearchInput />

        <Tooltip
          title="Profile Settings"
          arrow
          placement="bottom"
          onClick={() => {
            navigate("profile");
          }}
        >
          <Avatar {...stringAvatar("Example Personnel")} />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
