import React from "react";
import { Grid, List, ListItem, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import { emptyJob } from "./emptyJob";
import FormInput from "../../components/FormInput";
import { IJob } from "../../interfaces/Job";
import ActionModal from "../../components/ActionModal";
import { useTranslation } from "react-i18next";
import useSWR, { useSWRConfig } from "swr";
import update from "../../services/update";
import BaseService from "../../services/index";
import FormMultiTextInput from "../../components/FormMultiTextInput";
import FormDropdown from "../../components/FormDropdown";
import { ICompany } from "../../interfaces/Company";

interface IJobModalProps {
  job?: IJob;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const multiTextInputSections = ["studyFields"];

const JobModal = (props: IJobModalProps) => {
  const { job, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "jobs.modal" });
  const { data: companies }: { data?: ICompany[] } = useSWR("companies");
  const { mutate } = useSWRConfig();
  return (
    <Formik
      initialValues={job ? { ...job } : { ...emptyJob }}
      onSubmit={(data) =>
        data.id
          ? update("jobs", data).then(() => mutate("jobs"))
          : BaseService.post("jobs", data).then(() => mutate("jobs"))
      }
      enableReinitialize
    >
      <Form>
        <ActionModal
          title={job ? t("edit") : t("add")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <Grid container>
            <Grid item xs={6}>
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
                    label={t("form.experience")}
                    type="number"
                    name="experience"
                  />
                </ListItem>
                <ListItem>
                  <FormInput
                    label={t("form.salary-expectation")}
                    type="number"
                    name="salaryExpectation"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                {multiTextInputSections.map((item, index) => (
                  <ListItem key={index}>
                    <FormMultiTextInput
                      label={t("form." + item)}
                      id={item}
                      name={item}
                    />
                  </ListItem>
                ))}
                <ListItem>
                  <FormDropdown<ICompany>
                    label={t("form.company")}
                    name="company"
                    options={companies || []}
                    defaultValue={t("form.dropdown-no-company")}
                    renderOptions={(option) => (
                      <MenuItem value={option.id}>
                        {option.id + " - " + option.name}
                      </MenuItem>
                    )}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default JobModal;
