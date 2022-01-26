import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyJob } from "./emptyJob";
import FormInput from "../../components/FormInput";
import { IJob } from "../../interfaces/Job";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";

interface IJobModalProps {
  job?: IJob;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const JobModal = (props: IJobModalProps) => {
  const { job, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "jobs.modal" });

  let form = useFormik({
    initialValues: job ? { ...job } : { ...emptyJob },
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
            label={t("form.experience")}
            type="number"
            value={form.values.experience}
            name="experience"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label={t("form.salary-expectation")}
            type="number"
            value={form.values.salaryExpectation}
            name="salaryExpectation"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default JobModal;
