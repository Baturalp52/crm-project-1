import React, { useEffect } from "react";
import { Paper, Box } from "@mui/material";

import { pageRedux } from "../../redux";
import SearchBar from "./SearchBar";
import { useFormik } from "formik";

const Search = () => {
  let form = useFormik({
    initialValues: {
      searchKey: "",
      page: 0,
      filter: 0,
    },
    onSubmit: () => {},
    enableReinitialize: true,
  });

  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "search",
      },
    });
  });
  return (
    <Paper
      sx={{
        width: "calc(100% - 40px)",
        marginLeft: "auto",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      <Box padding={2}>
        <SearchBar searchForm={form} />
      </Box>
    </Paper>
  );
};

export default Search;
