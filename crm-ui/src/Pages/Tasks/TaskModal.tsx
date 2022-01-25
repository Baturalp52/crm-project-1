import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyTask } from "./emptyTask";
import FormInput from "../../components/FormInput";
import { ITask } from "../../mockData/interfaces/Task";
import ActionModal from "../../components/ActionModal";

interface ITaskModalProps {
  task?: ITask;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const TaskModal = (props: ITaskModalProps) => {
  const { task, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: task ? { ...task } : { ...emptyTask },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? "Edit Task" : "Add New"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={() => {}}
    >
      <List>
        <ListItem>
          <FormInput
            label="id"
            type="number"
            value={form.values.id}
            name="id"
            onChange={form.handleChange}
            disabled
          />
        </ListItem>
        <ListItem>
          <FormInput
            label="Name"
            type="text"
            value={form.values.name}
            name="name"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label="Description"
            type="text"
            value={form.values.description}
            name="description"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default TaskModal;
