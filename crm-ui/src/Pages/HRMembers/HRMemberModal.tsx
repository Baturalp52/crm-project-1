import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyHRMember } from "./emptyHRMember";
import FormInput from "../../components/FormInput";

import { IHRMember } from "../../mockData/interfaces/HRMember";
import ActionModal from "../../components/ActionModal";

interface IHRMemberModalProps {
  hrmember?: IHRMember;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const HRMemberModal = (props: IHRMemberModalProps) => {
  const { hrmember, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: hrmember ? { ...hrmember } : { ...emptyHRMember },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? "Edit HRMember" : "Add New"}
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
            label="Address"
            type="text"
            value={form.values.surname}
            name="address"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default HRMemberModal;
