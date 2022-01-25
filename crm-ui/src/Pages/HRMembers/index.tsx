import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import HRMembersTable from "./HRMembersTable";

const HRMembers = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "hrMembers",
      },
    });
  });
  return <HRMembersTable />;
};

export default HRMembers;
