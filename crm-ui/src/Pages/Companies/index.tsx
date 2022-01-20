import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  useEffect(() => {
    document.title = "Companies || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Companies",
      },
    });
  });
  return <CompaniesTable />;
};

export default Companies;
