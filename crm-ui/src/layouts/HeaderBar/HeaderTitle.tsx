import React, { useState } from "react";
import { Typography } from "@mui/material";
import { pageRedux } from "../../redux";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const HeaderTitle = () => {
  const [headerTitle, setHeaderTitle] = useState(document.title.split("||")[0]);
  const { t } = useTranslation();

  const updateTitle = () => {
    const title = t(pageRedux.getState().title);
    setHeaderTitle(title);
    document.title = `${title} || CRM`;
  };
  pageRedux.subscribe(updateTitle);
  i18n.on("languageChanged", updateTitle);
  return (
    <Typography color="darkblue" variant="h6" mx="auto">
      {headerTitle}
    </Typography>
  );
};

export default HeaderTitle;
