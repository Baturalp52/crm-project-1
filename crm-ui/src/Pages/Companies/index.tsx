import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "Companies",
        pageTitle: "Companies || CRM",
      },
    });
  });
  return <CompaniesTable />;
};

export default Companies;
