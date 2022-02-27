import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import FormInput from "../../components/FormInput";

import { IHRMember } from "../../interfaces/HRMember";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";
import update from "../../services/update";
import { pageRedux } from "../../redux";

interface IProfileModalProps {
  user: IHRMember;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const ProfileModal = (props: IProfileModalProps) => {
  const { user, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "profile" });
  const { dispatch } = pageRedux;

  let form = useFormik({
    initialValues: user,
    onSubmit: (data) =>
      update("hr-members", data).then((res) =>
        dispatch({
          type: "CHANGE_USER",
          payload: {
            user: res.data,
          },
        })
      ),
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={t("edit-profile")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={form.submitForm}
    >
      <List>
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
            label={t("form.surname")}
            type="text"
            value={form.values.surname}
            name="surname"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label={t("form.username")}
            type="text"
            value={form.values.username}
            name="username"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default ProfileModal;
