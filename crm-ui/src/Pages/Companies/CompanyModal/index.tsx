import React from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import FormInput from "../../../components/FormInput";
import ActionModal from "../../../components/ActionModal";

import { ICompany } from "../../../interfaces/Company";
import { emptyCompany } from "../emptyCompany";
import MapsInput from "../../../components/MapsInput";
import update from "../../../services/update";
import BaseService from "../../../services/index";
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

  let form = useFormik({
    initialValues: company ? { ...company } : { ...emptyCompany },
    onSubmit: (data) =>
      data.id
        ? update("companies", data).then(() => mutate("companies"))
        : BaseService.post("companies", data).then(() => mutate("companies")),
    enableReinitialize: true,
  });
  return (
    <ActionModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={form.values.id ? t("edit") : t("add")}
      saveFunction={() => form.submitForm()}
    >
      <Grid container padding={2} spacing={2}>
        <Grid xs={12} md={6} item>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box m={1}>
            <Typography variant="subtitle1">{t("form.jobs")}</Typography>
            <List sx={{ padding: 1 }}>
              {form.values.jobs && form.values.jobs.length > 0 ? (
                form.values.jobs?.map((job, index) => (
                  <ListItem key={index}>{job.name}</ListItem>
                ))
              ) : (
                <ListItem>No Jobs</ListItem>
              )}
            </List>
          </Box>
          <MapsInput
            mainCoords={form.values.mapsCoord}
            setCoord={(coord: any) => {
              form.setFieldValue("mapsCoord", coord);
            }}
            isMainMoving
          />
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default CompanyModal;
