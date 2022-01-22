import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import HRMembersTable from "./HRMembersTable";

const HRMembers = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "HR Members",
        pageTitle: "HR Members || CRM",
      },
    });
  });
  return <HRMembersTable />;
};

export default HRMembers;
