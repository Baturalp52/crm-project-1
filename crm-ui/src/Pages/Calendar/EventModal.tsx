// react
import React from "react";
// @mui
import { List, ListItem } from "@mui/material";
// formik
import { Form, Formik } from "formik";
// interfaces
import { IEvent } from "../../interfaces/Event";
// empty
import { emptyEvent } from "./emptyEvent";
// components
import ActionModal from "../../components/ActionModal";
import FormInput from "../../components/FormInput";
// react-i18next
import { useTranslation } from "react-i18next";
// swr
import { useSWRConfig } from "swr";
// services
import update from "../../services/update";
import BaseService from "../../services/index";

interface IEventModalProps {
  event?: IEvent;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const EventModal = (props: IEventModalProps) => {
  const { event, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "calendar" });
  const { mutate } = useSWRConfig();

  return (
    <Formik
      initialValues={event ? { ...event } : { ...emptyEvent }}
      onSubmit={(data) =>
        data.id
          ? update("events", data).then(() => mutate("events"))
          : BaseService.post("events", data).then(() => mutate("events"))
      }
      enableReinitialize
    >
      <Form>
        <ActionModal
          title={event ? t("edit") : t("add")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
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
              <FormInput label={t("form.title")} type="text" name="title" />
            </ListItem>
            <ListItem>
              <FormInput
                label={t("form.description")}
                type="text"
                name="desc"
              />
            </ListItem>
          </List>
        </ActionModal>
      </Form>
    </Formik>
  );
};

export default EventModal;
