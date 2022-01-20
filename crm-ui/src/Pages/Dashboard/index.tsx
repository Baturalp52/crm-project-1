import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Dashboard",
      },
    });
  });
  return <DashboardGrid />;
};

export default Dashboard;
