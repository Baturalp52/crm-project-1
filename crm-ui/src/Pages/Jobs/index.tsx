import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import JobsTable from "./JobsTable";

const Jobs = () => {
  useEffect(() => {
    document.title = "Jobs || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Jobs",
      },
    });
  });
  return <JobsTable />;
};

export default Jobs;
