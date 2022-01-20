import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import TasksTable from "./TasksTable";

const Tasks = () => {
  useEffect(() => {
    document.title = "Tasks || CRM";
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "Tasks",
      },
    });
  });
  return <TasksTable />;
};

export default Tasks;
