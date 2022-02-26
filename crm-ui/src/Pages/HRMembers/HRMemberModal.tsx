import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyHRMember } from "./emptyHRMember";
import FormInput from "../../components/FormInput";

import { IHRMember } from "../../interfaces/HRMember";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";
import update from "../../services/update";
import BaseService from "../../services/index";
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

  let form = useFormik({
    initialValues: hrmember ? { ...hrmember } : { ...emptyHRMember },
    onSubmit: (data) =>
      data.id
        ? update("hr-members", data).then(() => mutate("hr-members"))
        : BaseService.post("hr-members", data).then(() => mutate("hr-members")),
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? t("edit") : t("add")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={form.submitForm}
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
            label={t("form.surname")}
            type="text"
            value={form.values.surname}
            name="surname"
            onChange={form.handleChange}
          />
        </ListItem>
        {!form.values.id && (
          <>
            <ListItem>
              <FormInput
                label={t("form.username")}
                type="text"
                value={form.values.username}
                name="username"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.password")}
                type="password"
                value={form.values.password}
                name="password"
                onChange={form.handleChange}
              />
            </ListItem>
          </>
        )}
      </List>
    </ActionModal>
  );
};

export default HRMemberModal;
