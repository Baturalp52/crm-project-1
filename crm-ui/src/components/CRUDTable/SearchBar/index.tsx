import React from "react";
import { Grid } from "@mui/material";
import SearchInput from "../../SearchInput";
import FormDropdown from "../../FormDropdown";
import { useTranslation } from "react-i18next";

interface ISearchBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  filters: string[];
}

const SearchBar = (props: ISearchBarProps) => {
  const { filter, setFilter, filters } = props;
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.search-bar",
  });

  return (
    <Grid container padding={2} spacing={2} sx={{ ml: "auto" }}>
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <SearchInput onChange={(e) => {}} />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <FormDropdown<string>
          label={t("label")}
          handleChange={(e) => {
            setFilter(e.target.value);
          }}
          datas={filters}
          defaultValue={t("select-filter")}
          dataToValue={(item) => t(`filters.${item}`)}
          selectedValue={filter}
          width="45%"
          getValue={(data) => data}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
