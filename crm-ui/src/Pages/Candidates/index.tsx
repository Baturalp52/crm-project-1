import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import CandidatesTable from "./CandidatesTable";

const Candidates = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "candidates",
      },
    });
  });
  return <CandidatesTable />;
};

export default Candidates;
