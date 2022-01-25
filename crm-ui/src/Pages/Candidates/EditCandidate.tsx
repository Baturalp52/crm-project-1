import React from "react";
import { Grid, Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import { ICandidate } from "../../mockData/interfaces/Candidate";
import { emptyCandidate } from "./emptyCandidate";
import FormInput from "../../components/FormInput";
import { FileUpload, SaveRounded } from "@mui/icons-material";
import FormMultiTextInput from "../../components/FormMultiTextInput";
import MapsInput from "../../components/MapsInput";
import mainCoord from "../../mockData/coords";
import ActionModal from "../../components/ActionModal";

interface IEditCandidateProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
  t: (key: string) => string;
}

const mockPhones = ["05000000050", "05000000051"];

const mockEmails = ["example@example.com", "example@example.com"];

const mockPreviousJobs = ["Job 1", "Job 2"];

const mockDepartments = ["Department 1", "Department 2"];

const mockKeywords = ["Keyword 1", "Keyword 2"];

const EditCandidate = (props: IEditCandidateProps) => {
  const { candidate, isOpen, setIsOpen, t } = props;

  let form = useFormik({
    initialValues: candidate ? { ...candidate } : { ...emptyCandidate },
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
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={4}>
          <FormInput
            label={t("form.id")}
            type="number"
            value={form.values.id}
            name="id"
            onChange={form.handleChange}
            disabled
          />
          <FormInput
            label={t("form.name")}
            type="text"
            value={form.values.name}
            name="name"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.surname")}
            type="text"
            value={form.values.surname}
            name="surname"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.address")}
            type="text"
            value={form.values.address}
            name="address"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.extraAddress")}
            type="text"
            value={form.values.extraAddress}
            name="extraAddress"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.zipCode")}
            type="text"
            value={form.values.zipCode}
            name="zipCode"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.city")}
            type="text"
            value={form.values.city}
            name="city"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.country")}
            type="text"
            value={form.values.country}
            name="country"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.comment")}
            type="text"
            value={form.values.comment}
            name="comment"
            onChange={form.handleChange}
          />
          <FormInput
            label={t("form.salaryExpectation")}
            type="number"
            value={form.values.salaryExpectation}
            name="salaryExpectation"
            onChange={form.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormMultiTextInput
            label={t("form.phoneNumbers")}
            id="phone-numbers"
            data={mockPhones}
          />
          <FormMultiTextInput
            label={t("form.emailAddresses")}
            id="email-addresses"
            data={mockEmails}
          />
          <FormMultiTextInput
            label={t("form.previousJobs")}
            id="previous-jobs"
            data={mockPreviousJobs}
          />
          <FormMultiTextInput
            label={t("form.departments")}
            id="departments"
            data={mockDepartments}
          />
          <FormMultiTextInput
            label={t("form.keywords")}
            id="keywords"
            data={mockKeywords}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MapsInput mainCoords={mainCoord} />
          {form.values.id ? (
            <Stack sx={{ m: 1 }} direction="row" spacing={1}>
              <Button variant="contained" color="success">
                <SaveRounded /> {t("form.cv.download")}
              </Button>
              <Button variant="contained" color="secondary">
                <FileUpload /> {t("form.cv.upload-new")}
              </Button>
            </Stack>
          ) : (
            <Button sx={{ m: 1 }} variant="contained" color="secondary">
              <FileUpload /> {t("form.cv.upload")}
            </Button>
          )}
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default EditCandidate;
