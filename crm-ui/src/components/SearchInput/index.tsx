import React from "react";
import { Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";

const SearchInput = () => {
  return (
    <Input
      type="search"
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      placeholder="Search"
      sx={{ width: "20rem" }}
    ></Input>
  );
};

export default SearchInput;
