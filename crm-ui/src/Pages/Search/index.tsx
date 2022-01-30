import React, { useEffect, useState } from "react";
import { Paper, Box } from "@mui/material";

import { pageRedux } from "../../redux";
import SearchBar from "./SearchBar";
import { useFormik } from "formik";
import ResultsTable from "../../components/ResultsTable";
import { IFilter } from "./filters";

const Search = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState({});
  const [filterObject, setFilterObject] = useState<IFilter | undefined>();
  let form = useFormik({
    initialValues: {
      searchKey: "",
      page: "",
      filter: "",
    },
    onSubmit: () => {},
    enableReinitialize: true,
  });

  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "search",
      },
    });
  });
  return (
    <Paper
      sx={{
        width: "calc(100% - 40px)",
        marginLeft: "auto",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      <Box padding={2}>
        <SearchBar
          searchForm={form}
          filterObject={filterObject}
          setFilterObject={setFilterObject}
        />
        {form.values.searchKey.length > 0 &&
          form.values.filter.length > 0 &&
          form.values.page.length > 0 && (
            <>
              <ResultsTable<any>
                data={[]}
                cellNames={["id", "Name", "Surname"]}
                keysToShow={[]}
                setIsDataModalOpen={setIsDataModalOpen}
                setModalData={setModalData}
              />
            </>
          )}
      </Box>
    </Paper>
  );
};

export default Search;
