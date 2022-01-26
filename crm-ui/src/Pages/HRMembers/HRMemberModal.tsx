import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyHRMember } from "./emptyHRMember";
import FormInput from "../../components/FormInput";

import { IHRMember } from "../../interfaces/HRMember";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";

interface IHRMemberModalProps {
  hrmember?: IHRMember;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const HRMemberModal = (props: IHRMemberModalProps) => {
  const { hrmember, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "hrMembers.modal" });

  let form = useFormik({
    initialValues: hrmember ? { ...hrmember } : { ...emptyHRMember },
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
            label={t("form.address")}
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
