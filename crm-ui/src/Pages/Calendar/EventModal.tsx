import React from "react";
import { List, ListItem } from "@mui/material";
import { useFormik } from "formik";
import { IEvent } from "../../mockData/interfaces/Event";
import { emptyEvent } from "./emptyEvent";
import FormInput from "../../components/FormInput";
import { useTranslation } from "react-i18next";
import ActionModal from "../../components/ActionModal";

interface IEventModalProps {
  event?: IEvent;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const EventModal = (props: IEventModalProps) => {
  const { event, isOpen, setIsOpen } = props;
  const { t } = useTranslation("pages", { keyPrefix: "calendar" });

  let form = useFormik({
    initialValues: event ? { ...event } : { ...emptyEvent },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <ActionModal
      title={form.values.id ? t("edit") : t("add")}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
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
            label={t("form.title")}
            type="text"
            value={form.values.title}
            name="title"
            onChange={form.handleChange}
          />
        </ListItem>
        <ListItem>
          <FormInput
            label={t("form.description")}
            type="text"
            value={form.values.desc}
            name="desc"
            onChange={form.handleChange}
          />
        </ListItem>
      </List>
    </ActionModal>
  );
};

export default EventModal;
