import React, { useState } from "react";
import { Typography } from "@mui/material";
import { pageRedux } from "../../redux";
import { useTranslation } from "react-i18next";

const HeaderTitle = () => {
  const [headerTitle, setHeaderTitle] = useState(document.title.split("||")[0]);
  const { t, i18n } = useTranslation();
  pageRedux.subscribe(() => {
    const title = t(pageRedux.getState().title);
    setHeaderTitle(title);
    document.title = `${title} || CRM`;
  });
  return (
    <Typography color="darkblue" variant="h6" mx="auto">
      {headerTitle}
    </Typography>
  );
};

export default HeaderTitle;
