import React, { useState } from "react";
// @mui
import { Grid, Button, Stack } from "@mui/material";
import { Email, FileUpload, Message, SaveRounded } from "@mui/icons-material";
// formik
import { Formik, Form } from "formik";
// interfaces
import { ICandidate } from "../../../interfaces/Candidate";
// components
import FormInput from "../../../components/FormInput";
import FormMultiTextInput from "../../../components/FormMultiTextInput";
import MapsInput from "../../../components/MapsInput";
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

interface ICandidateModalProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const multiTextInputSections = [
  "phoneNumbers",
  "emailAdresses",
  "previousJobs",
  "departments",
  "keywords",
  "diplomas",
];

const CandidateModal = (props: ICandidateModalProps) => {
  const { candidate, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "candidates.modal" });
  const { mutate } = useSWRConfig();

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
              <FormInput label={t("form.comment")} type="text" name="comment" />
              <FormInput
                label={t("form.salaryExpectation")}
                type="number"
                name="salaryExpectation"
              />

              <SituationSwitch
                disableRipple
                color="success"
                label={t("form.situation").toString()}
                dropdownLabel={t("form.placed-job")}
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
            </Grid>
            <Grid item xs={12} md={4}>
              <MapsInput name="mapsCoord" isMainMoving />
              {candidate ? (
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
              {Boolean(candidate) && (
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
              )}
            </Grid>
          </Grid>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default CandidateModal;
