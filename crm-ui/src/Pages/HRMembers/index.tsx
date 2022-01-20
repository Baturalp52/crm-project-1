import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import HRMembersTable from "./HRMembersTable";

const HRMembers = () => {
  useEffect(() => {
    document.title = "HR Members || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "HR Members",
      },
    });
  });
  return <HRMembersTable />;
};

export default HRMembers;
