import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SearchInput from "../../components/SearchInput";
import FormDropdown from "../../components/FormDropdown";
import { useTranslation } from "react-i18next";
import filters from "./filters";

const SearchBar = (props: { searchForm: any }) => {
  const { t } = useTranslation();
  const { searchForm } = props;

  useEffect(() => {
    searchForm.setFieldValue("filter", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchForm.values.page]);

  return (
    <Grid container padding={2} spacing={2}>
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <SearchInput
          onChange={(e) => {
            searchForm.setFieldValue("searchKey", e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <FormDropdown<{ id: number; pageName: string; filters: Object[] }>
          label={t("pages:search.search-bar.select-page")}
          handleChange={(e) => {
            searchForm.setFieldValue("page", e.target.value);
          }}
          datas={filters}
          defaultValue={t("pages:search.search-bar.select-page")}
          dataToValue={(item) => t(item.pageName)}
          selectedId={searchForm.values.page}
          width="45%"
        />

        <FormDropdown<{ id: number; filterName: string }>
          label={t("pages:search.search-bar.select-filter")}
          handleChange={(e) => {
            searchForm.setFieldValue("filter", e.target.value);
          }}
          datas={
            filters[searchForm.values.page - 1]
              ? filters[searchForm.values.page - 1].filters
              : []
          }
          defaultValue={t("pages:search.search-bar.select-filter")}
          dataToValue={(item) => t("pages:search.filters." + item.filterName)}
          selectedId={searchForm.values.filter}
          disabled={!Boolean(searchForm.values.page)}
          width="45%"
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
