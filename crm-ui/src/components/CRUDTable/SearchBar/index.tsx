import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import SearchInput from "../../SearchInput";
import FormDropdown from "../../FormDropdown";
import { useTranslation } from "react-i18next";
import { Search } from "@mui/icons-material";

export interface ISearchProps {
  searchFields: string[];
  filters: {
    name: string;
    component: React.ReactNode | React.ReactChild | React.ReactChildren;
  }[];
}
interface ISearchBarProps {
  searchProps: ISearchProps;
  searchForm: any;
}

const SearchBar = (props: ISearchBarProps) => {
  const { searchForm, searchProps } = props;
  const [searchKey, setSearchKey] = useState<string>("");
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.search-bar",
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{ mr: "auto", width: "100%", ml: 2, alignItems: "flex-end" }}
    >
      <Grid item xs={4} sx={{ display: "flex" }}>
        <SearchInput
          onChange={(e: any) => {
            if (Boolean(searchForm.values.filter)) {
              setSearchKey(e.target.value);
            }
          }}
        />
      </Grid>
      <Grid item xs={4} sx={{ display: "flex" }}>
        <FormDropdown<string>
          label={t("label")}
          handleChange={(e) => {
            searchForm.setFieldValue("filter", e.target.value);
          }}
          datas={searchProps.searchFields}
          defaultValue={t("select-search-field")}
          dataToValue={(item) => t(`search-fields.${item}`)}
          selectedValue={searchForm.values.filter}
          width="45%"
          getValue={(data) => data}
          sx={{ m: "0!important" }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{ ml: "auto" }}
          disabled={!Boolean(searchForm.values.filter)}
          startIcon={<Search />}
          onClick={() => {
            searchForm.setFieldValue("searchKey", searchKey);
            searchForm.submitForm();
          }}
        >
          {t("search")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
