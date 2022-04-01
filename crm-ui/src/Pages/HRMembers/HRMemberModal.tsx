// react
import React from "react";
// @mui
import { List, ListItem } from "@mui/material";
// formik
import { Form, Formik } from "formik";
// empty
import { emptyHRMember } from "./emptyHRMember";
// components
import FormInput from "../../components/FormInput";
import ActionModal from "../../components/ActionModal";
// interfaces
import { IHRMember } from "../../interfaces/HRMember";
// react-i18next
import { useTranslation } from "react-i18next";
// services
import update from "../../services/update";
import BaseService from "../../services/index";
// swr
import { useSWRConfig } from "swr";

interface IHRMemberModalProps {
  hrmember?: IHRMember;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const HRMemberModal = (props: IHRMemberModalProps) => {
  const { hrmember, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "hrMembers.modal" });
  const { mutate } = useSWRConfig();

  return (
    <Formik
      initialValues={hrmember ? { ...hrmember } : { ...emptyHRMember }}
      onSubmit={(data) =>
        data.id
          ? update("hr-members", data).then(() => mutate("hr-members"))
          : BaseService.post("hr-members", data).then(() =>
              mutate("hr-members")
            )
      }
      enableReinitialize
    >
      <Form>
        <ActionModal
          title={hrmember ? t("edit") : t("add")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
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
              <FormInput label={t("form.surname")} type="text" name="surname" />
            </ListItem>
            {!hrmember && (
              <>
                <ListItem>
                  <FormInput
                    label={t("form.username")}
                    type="text"
                    name="username"
                  />
                </ListItem>
                <ListItem>
                  <FormInput
                    label={t("form.password")}
                    type="password"
                    name="password"
                  />
                </ListItem>
              </>
            )}
          </List>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default HRMemberModal;
