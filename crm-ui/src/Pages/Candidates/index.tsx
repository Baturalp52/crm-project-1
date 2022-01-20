import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CandidatesTable from "./CandidatesTable";

const Candidates = () => {
  useEffect(() => {
    document.title = "Candidates || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Candidates",
      },
    });
  });
  return <CandidatesTable />;
};

export default Candidates;
