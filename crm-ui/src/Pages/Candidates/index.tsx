import React, { useEffect } from "react";
import CandidatesTable from "./CandidatesTable";

const Candidates = () => {
  useEffect(() => {
    document.title = "Candidates || CRM";
  });

  return (
    <>
      <CandidatesTable />
    </>
  );
};

export default Candidates;
