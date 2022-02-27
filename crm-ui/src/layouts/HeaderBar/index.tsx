import React, { useState } from "react";
import { AppBar, Avatar, Toolbar, Tooltip } from "@mui/material";
import { stringAvatar } from "./helpers";
import HeaderTitle from "./HeaderTitle";
import { useTranslation } from "react-i18next";
import ProfileModal from "./ProfileModal";

const HeaderBar = ({ user }: { user: any }) => {
  const { t } = useTranslation();
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);

  return (
    <>
      <ProfileModal
        user={user}
        isOpen={profileModalOpen}
        setIsOpen={setProfileModalOpen}
      />
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
              setProfileModalOpen(true);
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
    </>
  );
};

export default HeaderBar;
