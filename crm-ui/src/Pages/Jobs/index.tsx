import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import JobsTable from "./JobsTable";

const Jobs = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "jobs",
      },
    });
  });
  return <JobsTable />;
};

export default Jobs;
