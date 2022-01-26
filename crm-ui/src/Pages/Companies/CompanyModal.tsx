import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { emptyCompany } from "./emptyCompany";
import FormInput from "../../components/FormInput";
import { ICompany } from "../../interfaces/Company";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";

interface ICompanyModalProps {
  company?: ICompany;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const CompanyModal = (props: ICompanyModalProps) => {
  const { company, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "companies.modal" });

  let form = useFormik({
    initialValues: company ? { ...company } : { ...emptyCompany },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={form.values.id ? t("edit") : t("add")}
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
            value={form.values.address}
            name="address"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label={t("form.city")}
            type="text"
            value={form.values.city}
            name="city"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label={t("form.sector")}
            type="text"
            value={form.values.sector}
            name="sector"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default CompanyModal;
