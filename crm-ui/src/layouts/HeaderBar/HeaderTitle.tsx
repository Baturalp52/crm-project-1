import React, { useState } from "react";
import { Typography } from "@mui/material";
import { pageRedux } from "../../redux";

const HeaderTitle = () => {
  const [headerTitle, setHeaderTitle] = useState(document.title.split("||")[0]);
  pageRedux.subscribe(() => {
    setHeaderTitle(pageRedux.getState().headerTitle);
    document.title = pageRedux.getState().pageTitle;
  });
  return (
    <Typography color="darkblue" variant="h6" mx="auto">
      {headerTitle}
    </Typography>
  );
};

export default HeaderTitle;
