import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "companies",
      },
    });
  });
  return <CompaniesTable />;
};

export default Companies;
