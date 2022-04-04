// react
import React, { useState } from "react";
// @mui
import { Grid, List, ListItem, MenuItem } from "@mui/material";

// components
import FormInput from "../../components/FormInput";
import ActionModal from "../../components/ActionModal";
import FormCommentsArea from "../../components/pages/Tasks/FormCommentsArea";
import FormDropdown from "../../components/FormDropdown";
import Loading from "../../components/Loading";
import ChangeSituation from "./ChangeSituation";
import FormDatePicker from "../../components/pages/Tasks/FormDatePicker";
// react-i18next
import { useTranslation } from "react-i18next";
// formik
import { Form, Formik } from "formik";
// interfaces
import { ITask } from "../../interfaces/Task";
import { ICandidate } from "../../interfaces/Candidate";
import { IHRMember } from "../../interfaces/HRMember";
// empty
import { emptyTask } from "./emptyTask";
// services
import update from "../../services/update";
import BaseService from "../../services/index";
// swr
import useSWR, { useSWRConfig } from "swr";
// redux
import { pageRedux } from "../../redux";
interface ITaskModalProps {
  task?: ITask;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const TaskModal = (props: ITaskModalProps) => {
  const { task, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "tasks.modal" });
  const { getState, dispatch, subscribe } = pageRedux;
  const { mutate } = useSWRConfig();
  const { data: candidates }: { data?: ICandidate[] } = useSWR("candidates");
  const { data: hrmembers }: { data?: IHRMember[] } = useSWR("hr-members");

  const [user, setUser] = useState(getState().user);

  subscribe(() => {
    setUser(getState().user);
  });

  if (!user) {
    if (window.location.pathname !== "/login") {
      BaseService.get("users").then((res) => {
        dispatch({
          type: "CHANGE_USER",
          payload: { user: res.data.user },
        });
      });
    }
  }

  if (!candidates && !hrmembers)
    return <React.Suspense fallback={<Loading />} />;

  return (
    <Formik
      initialValues={task ? { ...task } : { ...emptyTask }}
      onSubmit={(data) => {
        data.comments?.forEach((comment: any) => {
          delete comment.owner;
        });
        data.id
          ? update("tasks", data).then(() => mutate("tasks"))
          : BaseService.post("tasks", data).then(() => mutate("tasks"));
      }}
      enableReinitialize
    >
      <Form>
        <ActionModal
          title={task ? t("edit") : t("add")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <FormInput
                    label={t("form.id")}
                    type="number"
                    name="id"
                    disabled
                  />
                </ListItem>
                <ListItem>
                  <FormInput label={t("form.name")} type="text" name="name" />
                </ListItem>
                <ListItem>
                  <FormInput
                    label={t("form.description")}
                    type="text"
                    name="description"
                  />
                </ListItem>
                <ListItem>
                  <FormDropdown<ICandidate>
                    label={t("form.assigned-candidate")}
                    options={candidates || []}
                    name="assignedCandidate"
                    defaultValue={t("form.dropdown-no-candidate")}
                    getSelection={(option: any, value) => option.id === value}
                    renderOptions={(option) => (
                      <MenuItem value={option as any}>
                        {option.id + " - " + option.name + " " + option.surname}
                      </MenuItem>
                    )}
                  />
                </ListItem>
                <ListItem>
                  <FormDropdown<IHRMember>
                    label={t("form.assigned-member")}
                    options={hrmembers || []}
                    name="assignedMember"
                    defaultValue={t("form.dropdown-global")}
                    getSelection={(option, value) => option.id === value.id}
                    renderOptions={(option) => (
                      <MenuItem value={option as any}>
                        {option.id + " - " + option.name + " " + option.surname}
                      </MenuItem>
                    )}
                  />
                </ListItem>
                <ListItem>
                  <FormDatePicker label={t("form.end-date")} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCommentsArea title={t("form.comments")} user={user} />
              <ChangeSituation title={t("form.change-situation")} />
            </Grid>
          </Grid>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default TaskModal;
