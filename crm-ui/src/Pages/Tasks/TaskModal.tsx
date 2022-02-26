import React, { useState } from "react";
import { Grid, List, ListItem, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import FormInput from "../../components/FormInput";
import ActionModal from "../../components/ActionModal";
import FormCommentsArea from "../../components/FormCommentsArea";
import FormDropdown from "../../components/FormDropdown";

import frLocale from "date-fns/locale/fr";

import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

import { IComment } from "../../interfaces/Comment";
import { ITask } from "../../interfaces/Task";

import { emptyTask } from "./emptyTask";

import ChangeSituation from "./ChangeSituation";
import update from "../../services/update";
import BaseService from "../../services/index";
import useSWR, { useSWRConfig } from "swr";
import { ICandidate } from "../../interfaces/Candidate";
import { IHRMember } from "../../interfaces/HRMember";
import Loading from "../../components/Loading";
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

  let form = useFormik({
    initialValues: task ? { ...task } : { ...emptyTask },
    onSubmit: (data) => {
      data.comments?.forEach((comment: any) => {
        delete comment.owner;
      });
      data.id
        ? update("tasks", data).then(() => mutate("tasks"))
        : BaseService.post("tasks", data).then(() => mutate("tasks"));
    },
    enableReinitialize: true,
  });

  if (!candidates && !hrmembers)
    return <React.Suspense fallback={<Loading />} />;

  return (
    <ActionModal
      title={form.values.id ? t("edit") : t("add")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={() => form.submitForm()}
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
            <ListItem>
              <FormDropdown
                label={t("form.assigned-candidate")}
                getValue={(item) => item.id}
                handleChange={(e) => {
                  form.setFieldValue(
                    "assignedCandidate",
                    (candidates || []).filter(
                      (candidate) => candidate.id === e.target.value
                    )[0]
                  );
                }}
                datas={candidates || []}
                defaultValue={t("form.dropdown-no-candidate")}
                dataToValue={(data) =>
                  data.id + " - " + data.name + " " + data.surname
                }
                selectedValue={
                  form.values.assignedCandidate
                    ? form.values.assignedCandidate.id
                    : 0
                }
              />
            </ListItem>
            <ListItem>
              <FormDropdown
                label={t("form.assigned-member")}
                getValue={(item) => item.id}
                handleChange={(e) => {
                  form.setFieldValue(
                    "assignedMember",
                    (hrmembers || []).filter(
                      (member) => member.id === e.target.value
                    )[0]
                  );
                }}
                datas={hrmembers || []}
                defaultValue={t("form.dropdown-global")}
                dataToValue={(data) =>
                  data.id + " - " + data.name + " " + data.surname
                }
                selectedValue={
                  form.values.assignedMember ? form.values.assignedMember.id : 0
                }
              />
            </ListItem>
            <ListItem>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={frLocale}
              >
                <DatePicker
                  label={t("form.end-date")}
                  value={form.values.endDate}
                  onChange={(date) => {
                    form.setFieldValue("endDate", date);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ m: 1 }} {...params} />
                  )}
                />
              </LocalizationProvider>
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
              data.task = form.values.id;
              data.owner = user;
              comments.push(data);
              form.setFieldValue("comments", comments);
            }}
          />
          <ChangeSituation
            title={t("form.change-situation")}
            situation={form.values.situation}
            setFieldValue={form.setFieldValue}
          />
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default TaskModal;
