import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CandidatesTable from "./CandidatesTable";

const Candidates = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "Candidates",
        pageTitle: "Candidates || CRM",
      },
    });
  });
  return <CandidatesTable />;
};

export default Candidates;
