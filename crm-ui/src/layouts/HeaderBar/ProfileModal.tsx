// react
import React from "react";
// @mui
import { List, ListItem } from "@mui/material";
// formik
import { Form, Formik } from "formik";
// components
import ActionModal from "../../components/ActionModal";
import FormInput from "../../components/FormInput";
// interfaces
import { IHRMember } from "../../interfaces/HRMember";
// react-i18next
import { useTranslation } from "react-i18next";
// update
import update from "../../services/update";
// redux
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

  return (
    <Formik
      initialValues={user}
      onSubmit={(data) =>
        update("hr-members", data).then((res) =>
          dispatch({
            type: "CHANGE_USER",
            payload: {
              user: res.data,
            },
          })
        )
      }
      enableReinitialize
    >
      <Form>
        <ActionModal
          title={t("edit-profile")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <List>
            <ListItem>
              <FormInput label={t("form.name")} type="text" name="name" />
            </ListItem>
            <ListItem>
              <FormInput label={t("form.surname")} type="text" name="surname" />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.username")}
                type="text"
                name="username"
              />
            </ListItem>
          </List>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default ProfileModal;
