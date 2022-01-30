import React from "react";
import { Grid, Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import { ICandidate } from "../../../interfaces/Candidate";
import { emptyCandidate } from "../emptyCandidate";
import FormInput from "../../../components/FormInput";
import { Email, FileUpload, Message, SaveRounded } from "@mui/icons-material";
import FormMultiTextInput from "../../../components/FormMultiTextInput";
import MapsInput from "../../../components/MapsInput";
import mainCoord from "../../../mockData/coords";
import ActionModal from "../../../components/ActionModal";
import { useTranslation } from "react-i18next";
import FormDropdown from "../../../components/FormDropdown";
import { IJob } from "../../../interfaces/Job";
import jobs from "../../../mockData/jobs";
import Skills from "./Skills";
import { ISkill } from "../../../interfaces/Skill";

interface ICandidateModalProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const mockPhones = ["05000000050", "05000000051"];

const mockEmails = ["example@example.com", "example@example.com"];

const mockPreviousJobs = ["Job 1", "Job 2"];

const mockDepartments = ["Department 1", "Department 2"];

const mockKeywords = ["Keyword 1", "Keyword 2"];

const mockDiplomas = ["Diploma 1", "Diploma 2"];

const CandidateModal = (props: ICandidateModalProps) => {
  const { candidate, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "candidates.modal" });
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
          <FormDropdown<IJob>
            label={t("form.requested-job")}
            handleChange={(e) => {
              form.setFieldValue(
                "requestedJob",
                jobs.filter((job) => job.id === e.target.value)[0]
              );
            }}
            datas={jobs}
            defaultValue={t("form.requested-job")}
            dataToValue={(job) => `${job.id} - ${job.name}`}
            selectedId={
              form.values.requestedJob ? form.values.requestedJob.id : 0
            }
          />
          <Skills
            skills={form.values.skills || []}
            addSkill={(skill: ISkill) => {
              const prevSkills = form.values.skills
                ? [...form.values.skills]
                : [];
              prevSkills.push(skill);
              form.setFieldValue("skills", prevSkills);
            }}
            editSkill={(skill: ISkill) => {
              let prevSkills = form.values.skills
                ? [...form.values.skills]
                : [];
              prevSkills = prevSkills.filter((item) => item.id !== skill.id);
              prevSkills.push(skill);
              form.setFieldValue("skills", prevSkills);
            }}
            removeSkill={(skill: ISkill) => {
              let prevSkills = form.values.skills
                ? [...form.values.skills]
                : [];
              prevSkills = prevSkills.filter((item) => item.id !== skill.id);
              form.setFieldValue("skills", prevSkills);
            }}
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
          <FormMultiTextInput
            label={t("form.diplomas")}
            id="diplomas"
            data={mockDiplomas}
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
          {Boolean(form.values.id) && (
            <Stack sx={{ m: 1 }} direction="row" spacing={1}>
              <Button variant="contained" color="primary">
                <Email sx={{ mr: 1 }} /> {t("send-mail")}
              </Button>
              <Button variant="contained" color="primary">
                <Message sx={{ mr: 1 }} /> {t("send-sms")}
              </Button>
            </Stack>
          )}
        </Grid>
      </Grid>
    </ActionModal>
  );
};

export default CandidateModal;
