import React, { useEffect } from "react";
import { pageRedux } from "../../redux";
import TasksTable from "./TasksTable";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Tasks = () => {
  const query = useQuery();
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "tasks",
      },
    });
  });
  return <TasksTable task={query.get("task")} />;
};

export default Tasks;
