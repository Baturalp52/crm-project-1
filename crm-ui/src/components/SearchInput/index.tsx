import React from "react";
import { Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const { t } = useTranslation("components", { keyPrefix: "searchInput" });
  return (
    <Input
      type="search"
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      placeholder={t("placeholder")}
      sx={{ width: "20rem" }}
    ></Input>
  );
};

export default SearchInput;
