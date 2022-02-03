import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import SearchInput from "../../SearchInput";
import { useTranslation } from "react-i18next";
import { Search, Tune } from "@mui/icons-material";
import AdvancedSearchModal from "../AdvancedSearchModal";

interface ISearchBarProps {
  searchForm: any;
  filters?: { label: string; name: string }[];
}

const SearchBar = (props: ISearchBarProps) => {
  const { searchForm, filters } = props;
  const [searchKey, setSearchKey] = useState<string>("");
  const [isAdvancedSearchModalOpen, setIsAdvancedSearchModalOpen] =
    useState<boolean>(false);
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.search-bar",
  });

  return (
    <>
      {Boolean(filters) && (
        <AdvancedSearchModal
          isOpen={isAdvancedSearchModalOpen}
          setIsOpen={setIsAdvancedSearchModalOpen}
          searchForm={searchForm}
          filters={filters ? filters : []}
        />
      )}
      <Grid
        container
        spacing={2}
        sx={{ mr: "auto", width: "50%", ml: 2, alignItems: "flex-end" }}
      >
        <Grid item xs={5} sx={{ display: "flex" }}>
          <SearchInput
            onChange={(e: any) => {
              setSearchKey(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            sx={{ ml: "auto" }}
            disabled={!Boolean(searchKey)}
            startIcon={<Search />}
            onClick={() => {
              searchForm.setFieldValue("search", { name: searchKey });
              searchForm.submitForm();
            }}
          >
            {t("search")}
          </Button>
        </Grid>
        {Boolean(filters) && (
          <Grid item xs={4}>
            <Button
              sx={{ ml: "auto" }}
              startIcon={<Tune />}
              onClick={() => {
                setIsAdvancedSearchModalOpen(true);
              }}
            >
              {t("advanced-search")}
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SearchBar;
