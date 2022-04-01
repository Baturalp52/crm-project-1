// react
import React from "react";
// formik
import { Form, Formik } from "formik";
// react-i18next
import { useTranslation } from "react-i18next";
// @mui
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
// components
import FormInput from "../../../components/FormInput";
import ActionModal from "../../../components/ActionModal";
import MapsInput from "../../../components/MapsInput";
import JobsList from "./JobsList";
// interfaces
import { ICompany } from "../../../interfaces/Company";
// empty
import { emptyCompany } from "../emptyCompany";
// services
import update from "../../../services/update";
import BaseService from "../../../services/index";
// swr
import { useSWRConfig } from "swr";

interface ICompanyModalProps {
  company?: ICompany;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const CompanyModal = (props: ICompanyModalProps) => {
  const { company, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "companies.modal" });
  const { mutate } = useSWRConfig();

  return (
    <Formik
      initialValues={company ? { ...company } : { ...emptyCompany }}
      onSubmit={(data) =>
        data.id
          ? update("companies", data).then(() => mutate("companies"))
          : BaseService.post("companies", data).then(() => mutate("companies"))
      }
      enableReinitialize
    >
      <Form>
        <ActionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={company ? t("edit") : t("add")}
        >
          <Grid container padding={2} spacing={2}>
            <Grid xs={12} md={6} item>
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
                  <FormInput
                    label={t("form.address")}
                    type="text"
                    name="address"
                  />
                </ListItem>
                <ListItem>
                  <FormInput label={t("form.city")} type="text" name="city" />
                </ListItem>
                <ListItem>
                  <FormInput
                    label={t("form.sector")}
                    type="text"
                    name="sector"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box m={1}>
                <Typography variant="subtitle1">{t("form.jobs")}</Typography>
                <JobsList />
              </Box>
              <MapsInput name="mapsCoord" isMainMoving />
            </Grid>
          </Grid>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default CompanyModal;
