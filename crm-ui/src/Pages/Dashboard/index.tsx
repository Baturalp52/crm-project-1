import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "dashboard",
      },
    });
  });
  return <DashboardGrid />;
};

export default Dashboard;
