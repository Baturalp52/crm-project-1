import React from "react";
import { Grid, List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyTask } from "./emptyTask";
import FormInput from "../../components/FormInput";
import { ITask } from "../../interfaces/Task";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";
import FormCommentsArea from "../../components/FormCommentsArea";
import { IComment } from "../../interfaces/Comment";

interface ITaskModalProps {
  task?: ITask;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const TaskModal = (props: ITaskModalProps) => {
  const { task, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "tasks.modal" });

  let form = useFormik({
    initialValues: task ? { ...task } : { ...emptyTask },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? t("edit") : t("add")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={() => {}}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <FormInput
                label={t("form.id")}
                type="number"
                value={form.values.id}
                name="id"
                onChange={form.handleChange}
                disabled
              />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.name")}
                type="text"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.description")}
                type="text"
                value={form.values.description}
                name="description"
                onChange={form.handleChange}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormCommentsArea
            title={t("form.comments")}
            values={form.values.comments}
            onChange={(data) => {
              const comments = form.values.comments
                ? [...(form.values.comments as Array<IComment>)]
                : [];
              comments.push(data);
              form.setFieldValue("comments", comments);
            }}
          />
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default TaskModal;
