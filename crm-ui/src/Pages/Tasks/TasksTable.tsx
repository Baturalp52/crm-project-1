import React, { useEffect, useState } from "react";

import TaskModal from "./TaskModal";
import { ITask } from "../../interfaces/Task";
import { getChipOfSituation } from "./helpers";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import useSWR from "swr";
import Loading from "../../components/Loading";

const TasksTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "tasks.table" });
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [taskModalTask, setTaskModalTask] = useState<ITask | undefined>(
    undefined
  );
  const { data, error } = useSWR("tasks");

  const [tasksData, setTasksData] = useState<ITask[]>(data);
  useEffect(() => {
    setTasksData(data);
  }, [data]);

  if (error) return <div>{error}</div>;
  if (!data) return <React.Suspense fallback={<Loading />} />;

  return (
    <>
      <TaskModal
        task={taskModalTask}
        isOpen={isTaskModalOpen}
        setIsOpen={setIsTaskModalOpen}
      />
      <CRUDTable<ITask>
        data={tasksData || []}
        cellNames={[
          t("id"),
          t("name"),
          t("description"),
          t("assigned-candidate"),
          t("situation"),
        ]}
        keysToShow={[
          "id",
          "name",
          "description",
          "assignedCandidate.name",
          "situation",
        ]}
        setModalData={setTaskModalTask}
        setIsDataModalOpen={setIsTaskModalOpen}
        customDataComponent={{
          situation: (data: string) => getChipOfSituation(data),
        }}
      />
    </>
  );
};
export default TasksTable;
