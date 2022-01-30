import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SearchInput from "../../components/SearchInput";
import FormDropdown from "../../components/FormDropdown";
import { useTranslation } from "react-i18next";
import filters, { IFilter } from "./filters";

const SearchBar = (props: {
  searchForm: any;
  filterObject: IFilter | undefined;
  setFilterObject: (obj: IFilter) => void;
}) => {
  const { t } = useTranslation();
  const { searchForm, filterObject, setFilterObject } = props;

  useEffect(() => {
    searchForm.setFieldValue("filter", "");
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
            setFilterObject(
              filters.filter((filter) => filter.pageName === e.target.value)[0]
            );
          }}
          datas={filters}
          defaultValue={t("pages:search.search-bar.select-page")}
          dataToValue={(item) => t(item.pageName)}
          selectedValue={searchForm.values.page}
          width="45%"
          getValue={(data) => data.pageName}
        />

        <FormDropdown<{ id: number; filterName: string }>
          label={t("pages:search.search-bar.select-filter")}
          handleChange={(e) => {
            searchForm.setFieldValue("filter", e.target.value);
          }}
          datas={filterObject ? filterObject.filters : []}
          defaultValue={t("pages:search.search-bar.select-filter")}
          dataToValue={(item) => t("pages:search.filters." + item.filterName)}
          selectedValue={searchForm.values.filter}
          disabled={!(searchForm.values.page.length > 0)}
          width="45%"
          getValue={(data) => data.filterName}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
