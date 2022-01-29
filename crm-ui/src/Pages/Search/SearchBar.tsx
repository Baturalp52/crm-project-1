import React, { useState } from "react";
import { Grid } from "@mui/material";
import SearchInput from "../../components/SearchInput";
import FormDropdown from "../../components/FormDropdown";
import { useTranslation } from "react-i18next";
import filters from "./filters";

const SearchBar = () => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  return (
    <Grid container padding={2} spacing={2}>
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <SearchInput />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <FormDropdown<{ id: number; pageName: string; filters: Object[] }>
          label={t("pages:search.search-bar.select-page")}
          handleChange={(e) => {
            setSelectedPage(e.target.value);
          }}
          datas={filters}
          defaultValue={t("pages:search.search-bar.select-page")}
          dataToValue={(item) => t(item.pageName)}
          selectedId={selectedPage}
          width="45%"
        />

        <FormDropdown<{ id: number; filterName: string }>
          label={t("pages:search.search-bar.select-filter")}
          handleChange={(e) => {
            setSelectedFilter(e.target.value);
          }}
          datas={
            filters[selectedPage - 1] ? filters[selectedPage - 1].filters : []
          }
          defaultValue={t("pages:search.search-bar.select-filter")}
          dataToValue={(item) => t("pages:search.filters." + item.filterName)}
          selectedId={selectedFilter}
          disabled={!Boolean(selectedPage)}
          width="45%"
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
