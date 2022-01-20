import React, { useState } from "react";
import { Typography } from "@mui/material";
import { pageRedux } from "../../redux";

const HeaderTitle = () => {
  const [title, setTitle] = useState(document.title.split("||")[0]);
  pageRedux.subscribe(() => {
    setTitle(pageRedux.getState().title);
  });
  return (
    <Typography color="darkblue" variant="h6" mx="auto">
      {title}
    </Typography>
  );
};

export default HeaderTitle;
