import React from "react";
import { Grid, List, ListItem } from "@mui/material";
import { useFormik } from "formik";
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
  let form = useFormik({
    initialValues: job ? { ...job } : { ...emptyJob },
    onSubmit: (data) =>
      data.id
        ? update("jobs", data).then(() => mutate("jobs"))
        : BaseService.post("jobs", data).then(() => mutate("jobs")),
    enableReinitialize: true,
  });

  const addToFormArray = (data: string, key: string) => {
    const arr: string[] = form.values[
      key as keyof typeof form.values
    ] as string[];
    arr.push(data);
    form.setFieldValue(key, arr);
  };
  const deleteFromArray = (index: number, key: string) => {
    const arr: string[] = form.values[
      key as keyof typeof form.values
    ] as string[];
    arr.splice(index, 1);
    form.setFieldValue(key, arr);
  };
  return (
    <ActionModal
      title={form.values.id ? t("edit") : t("add")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveFunction={form.submitForm}
    >
      <Grid container>
        <Grid item xs={6}>
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
                label={t("form.experience")}
                type="number"
                value={form.values.experience}
                name="experience"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.salary-expectation")}
                type="number"
                value={form.values.salaryExpectation}
                name="salaryExpectation"
                onChange={form.handleChange}
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
                  data={
                    form.values[item as keyof typeof form.values] as string[]
                  }
                  addNew={(data) => {
                    addToFormArray(data, item);
                  }}
                  deleteItem={(index) => {
                    deleteFromArray(index, item);
                  }}
                />
              </ListItem>
            ))}
            <ListItem>
              <FormDropdown
                label={t("form.company")}
                getValue={(item) => item.id}
                handleChange={(e) => {
                  form.setFieldValue(
                    "company",
                    (companies || []).filter(
                      (company) => company.id === e.target.value
                    )[0]
                  );
                }}
                datas={companies || []}
                defaultValue={t("form.dropdown-no-company")}
                dataToValue={(data) => data.id + " - " + data.name}
                selectedValue={form.values.company ? form.values.company.id : 0}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default JobModal;
