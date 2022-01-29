import React, { useEffect, useState } from "react";
import { Paper, Box } from "@mui/material";

import { pageRedux } from "../../redux";
import SearchBar from "./SearchBar";
import { useFormik } from "formik";
import ResultsTable from "../../components/ResultsTable";

const Search = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState({});
  let form = useFormik({
    initialValues: {
      searchKey: "",
      page: 0,
      filter: 0,
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
        <SearchBar searchForm={form} />
        {form.values.searchKey.length > 0 &&
          Boolean(form.values.filter) &&
          Boolean(form.values.page) && (
            <>
              <ResultsTable<any>
                data={[]}
                cellNames={["id", "Name", "Surname"]}
                keysToShow={["id", "name", "surname"]}
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
