import React, { useEffect } from "react";
import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard || CRM";
  });
  return (
    <>
      <DashboardGrid />
    </>
  );
};

export default Dashboard;
