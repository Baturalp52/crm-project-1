import React from "react";
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

import hrmembers from "../../mockData/hrmembers";
import candidates from "../../mockData/candidates";
import ChangeSituation from "./ChangeSituation";
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
            <ListItem>
              <FormDropdown
                label={t("form.assigned-candidate")}
                handleChange={(e) => {
                  form.setFieldValue(
                    "assignedCandidate",
                    candidates.filter(
                      (candidate) => candidate.id === e.target.value
                    )[0]
                  );
                }}
                datas={candidates}
                defaultValue={t("form.dropdown-no-candidate")}
                dataToValue={(data) =>
                  data.id + " - " + data.name + " " + data.surname
                }
                selectedId={
                  form.values.assignedCandidate
                    ? form.values.assignedCandidate.id
                    : 0
                }
              />
            </ListItem>
            <ListItem>
              <FormDropdown
                label={t("form.assigned-member")}
                handleChange={(e) => {
                  form.setFieldValue(
                    "assignedMember",
                    hrmembers.filter(
                      (member) => member.id === e.target.value
                    )[0]
                  );
                }}
                datas={hrmembers}
                defaultValue={t("form.dropdown-global")}
                dataToValue={(data) =>
                  data.id + " - " + data.name + " " + data.surname
                }
                selectedId={
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
                  renderInput={(params) => <TextField {...params} />}
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
