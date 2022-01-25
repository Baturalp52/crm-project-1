import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyJob } from "./emptyJob";
import FormInput from "../../components/FormInput";
import { IJob } from "../../mockData/interfaces/Job";
import ActionModal from "../../components/ActionModal";

interface IJobModalProps {
  job?: IJob;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const JobModal = (props: IJobModalProps) => {
  const { job, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: job ? { ...job } : { ...emptyJob },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? "Edit Job" : "Add New"}
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
            label="Experience"
            type="number"
            value={form.values.experience}
            name="experience"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label="Salary Expectation"
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
