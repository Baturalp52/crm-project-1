import React, { useState } from "react";

import tasks from "../../mockData/tasks";
import TaskModal from "./TaskModal";
import { ITask } from "../../interfaces/Task";
import { getChipOfSituation } from "./helpers";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";

const TasksTable = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [taskModalTask, setTaskModalTask] = useState<ITask | undefined>(
    undefined
  );

  const { t } = useTranslation("pages", { keyPrefix: "tasks.table" });

  return (
    <>
      <TaskModal
        task={taskModalTask}
        isOpen={isTaskModalOpen}
        setIsOpen={setIsTaskModalOpen}
      />
      <CRUDTable<ITask>
        data={tasks}
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
