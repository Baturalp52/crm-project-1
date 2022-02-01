import React from "react";
import { Grid } from "@mui/material";
import SearchInput from "../../SearchInput";
import FormDropdown from "../../FormDropdown";
import { useTranslation } from "react-i18next";

export interface ISearchBarObject {
  filters: {
    name: string;
    component: React.ReactNode | React.ReactChild | React.ReactChildren;
  }[];
  searchFields: string[];
  search: (e: any) => void;
}
interface ISearchBarProps {
  filter: string | number;
  setFilter: (filter: string) => void;
  object: ISearchBarObject;
}

const SearchBar = (props: ISearchBarProps) => {
  const { filter, setFilter, object } = props;
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.search-bar",
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{ mr: "auto", width: "45%", ml: 2, alignItems: "flex-end" }}
    >
      <Grid item xs={6} sx={{ display: "flex" }}>
        <SearchInput
          onChange={(e: any) => {
            if (Boolean(filter)) object.search(e);
          }}
        />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <FormDropdown<string>
          label={t("label")}
          handleChange={(e) => {
            setFilter(e.target.value);
          }}
          datas={object.searchFields}
          defaultValue={t("select-search-field")}
          dataToValue={(item) => t(`search-fields.${item}`)}
          selectedValue={filter}
          width="45%"
          getValue={(data) => data}
          sx={{ m: "0!important" }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
