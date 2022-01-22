import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import TasksTable from "./TasksTable";

const Tasks = () => {
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        headerTitle: "Tasks",
        pageTitle: "Tasks || CRM",
      },
    });
  });
  return <TasksTable />;
};

export default Tasks;
