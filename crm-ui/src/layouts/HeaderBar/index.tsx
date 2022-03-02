import React, { useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Tooltip, Stack } from "@mui/material";
import { stringAvatar } from "./helpers";
import HeaderTitle from "./HeaderTitle";
import { useTranslation } from "react-i18next";
import ProfileModal from "./ProfileModal";

import i18n from "../../i18n";

import enFlag from "../../assets/en.png";
import frFlag from "../../assets/fr.png";

const FLAGS = {
  en: enFlag,
  fr: frFlag,
};

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
          <Stack flexDirection="row" alignItems="center">
            <Button
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={(e) =>
                i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
              }
            >
              <Avatar src={FLAGS[i18n.language as keyof typeof FLAGS]} />
            </Button>
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
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderBar;
