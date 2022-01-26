import React from "react";
import { AppBar, Avatar, Toolbar, Tooltip } from "@mui/material";
import SearchInput from "../../components/SearchInput";
import { stringAvatar } from "./helpers";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";

const personnelName = "Example Personnel";

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
        <HeaderTitle />
        <Tooltip
          title={personnelName}
          arrow
          placement="bottom"
          onClick={() => {
            navigate("profile");
          }}
        >
          <Avatar {...stringAvatar(personnelName)} />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
