import React from "react";
import { Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";

const SearchInput = (props: { onChange: (e: any) => void }) => {
  const { t } = useTranslation("components", { keyPrefix: "searchInput" });
  const { onChange } = props;
  return (
    <Input
      type="search"
      onChange={onChange}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      placeholder={t("placeholder")}
      sx={{ width: "40em", mx: "auto" }}
    ></Input>
  );
};

export default SearchInput;
