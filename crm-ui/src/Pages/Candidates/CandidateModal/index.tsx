import React, { useState } from "react";
// @mui
import { Grid, Button, Stack, MenuItem } from "@mui/material";
import { Email, FileUpload, Message, SaveRounded } from "@mui/icons-material";
// formik
import { Formik, Form } from "formik";
// interfaces
import { ICandidate } from "../../../interfaces/Candidate";
// components
import FormInput from "../../../components/FormInput";
import FormMultiTextInput from "../../../components/FormMultiTextInput";
import MapsInput from "../../../components/MapsInput";
import FormDropdown from "../../../components/FormDropdown";
import ActionModal from "../../../components/ActionModal";
import Skills from "./Skills";
import SituationSwitch from "./SituationSwitch";
import SendMessageModal from "./SendMessageModal";
// react-i18next
import { useTranslation } from "react-i18next";
// services
import update from "../../../services/update";
import BaseService from "../../../services/index";
// swr
import { useSWRConfig } from "swr";
// empty
import { emptyCandidate } from "../emptyCandidate";
// react-router-dom
import { useNavigate } from "react-router-dom";

interface ICandidateModalProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}
//-----------------------------------------------------------------------------
const multiTextInputSections = [
  "phoneNumbers",
  "emailAdresses",
  "jobs",
  "departments",
  "keywords",
  "diplomas",
];

const mobilityOptions = [
  "National",
  "	Auvergne Rhones Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre Val de Loire",
  "Grand Est ",
  "Hauts de France",
  "Ile de France ",
  "Normandie",
  "Nouvelle Aquitaine ",
  "Occitanie",
  "Pays de la Loire	",
  "Provence Alpes Cotes d'Azur ",
  "Alsace",
];

const experienceOptions = ["0-4", "5-10", "11-15", "16-20", "21-25", "26-30"];

//-----------------------------------------------------------------------------

const CandidateModal = (props: ICandidateModalProps) => {
  const { candidate, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "candidates.modal" });
  const { mutate } = useSWRConfig();
  const navigate = useNavigate();

  const [isSendMessageModalOpen, setIsSendMessageModalOpen] =
    useState<boolean>(false);
  const [sendMessageModalType, setSendMessageModalType] = useState<
    "sms" | "email"
  >("sms");

  const onSubmit = (data: ICandidate) => {
    data.id
      ? update("candidates", data).then(() => mutate("candidates"))
      : BaseService.post("candidates", data).then(() => mutate("candidates"));
  };
  const handleUploadNewCV = (event: any) => {
    console.log(event.target.files);
  };

  return (
    <Formik
      initialValues={candidate ? { ...candidate } : { ...emptyCandidate }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <ActionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={candidate ? t("edit") : t("add")}
        >
          <SendMessageModal
            isOpen={isSendMessageModalOpen}
            setIsOpen={setIsSendMessageModalOpen}
            messageType={sendMessageModalType}
          />
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12} md={4}>
              <FormInput
                label={t("form.id")}
                type="number"
                name="id"
                disabled
              />
              <FormInput label={t("form.name")} type="text" name="name" />
              <FormInput label={t("form.surname")} type="text" name="surname" />
              <FormInput label={t("form.address")} type="text" name="address" />
              <FormInput
                label={t("form.extraAddress")}
                type="text"
                name="extraAddress"
              />
              <FormInput label={t("form.zipCode")} type="text" name="zipCode" />
              <FormInput label={t("form.city")} type="text" name="city" />
              <FormInput label={t("form.country")} type="text" name="country" />

              <FormInput
                label={t("form.salaryExpectation")}
                type="number"
                name="salaryExpectation"
              />

              <SituationSwitch
                disableRipple
                color="success"
                label={t("form.situation").toString()}
                DropdownLabel={t("form.placed-job")}
              />

              <Skills />
            </Grid>
            <Grid item xs={12} md={4}>
              {multiTextInputSections.map((item, index) => (
                <FormMultiTextInput
                  key={index}
                  name={item}
                  label={t("form." + item)}
                  id={item}
                />
              ))}
              <FormMultiTextInput
                name="mobility"
                label={t("form.mobility")}
                id={"mobility"}
                options={mobilityOptions}
              />
              <FormDropdown<string>
                name="experience"
                label="Experience"
                defaultValue="Select Experience"
                options={experienceOptions}
                renderOptions={(option) => (
                  <MenuItem
                    key={option}
                    value={experienceOptions.indexOf(option)}
                  >
                    {option}
                  </MenuItem>
                )}
              />
              <FormInput name="experienceDetails" label="Experience Details" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MapsInput name="mapsCoord" isMainMoving />
              <FormInput
                label={t("form.comment")}
                multiline
                rows={4}
                type="text"
                name="comment"
              />
              {candidate ? (
                <Stack sx={{ m: 1 }} direction="row" spacing={1}>
                  <Button component="label" color="success">
                    <SaveRounded /> {t("form.cv.download")}
                  </Button>
                  <Button component="label" color="secondary">
                    <FileUpload /> {t("form.cv.upload-new")}
                    <input type="file" hidden onChange={handleUploadNewCV} />
                  </Button>
                </Stack>
              ) : (
                <Button sx={{ m: 1 }} component="label" color="secondary">
                  <FileUpload /> {t("form.cv.upload")}
                </Button>
              )}
              {candidate && (
                <>
                  <Stack sx={{ m: 1 }} direction="row" spacing={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setSendMessageModalType("email");
                        setIsSendMessageModalOpen(true);
                      }}
                    >
                      <Email sx={{ mr: 1 }} /> {t("send-mail")}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setSendMessageModalType("sms");
                        setIsSendMessageModalOpen(true);
                      }}
                    >
                      <Message sx={{ mr: 1 }} /> {t("send-sms")}
                    </Button>
                  </Stack>
                  <Stack
                    sx={{ m: 1 }}
                    direction="column"
                    spacing={1}
                    justifyContent="center"
                  >
                    {candidate.tasks.length > 0 &&
                      candidate.tasks.map((task, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          color="primary"
                          onClick={() => navigate(`/tasks?task=${task.id}`)}
                        >
                          Open Task {"=>"} {task.id} - {task.name}
                        </Button>
                      ))}
                  </Stack>
                </>
              )}
            </Grid>
          </Grid>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default CandidateModal;
