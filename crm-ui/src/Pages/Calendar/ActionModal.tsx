import React from "react";
import {
  Box,
  Button,
  Modal,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { IEvent } from "../../mockData/interfaces/Event";
import { emptyEvent } from "./emptyEvent";
import FormInput from "../../components/FormInput";
import { CloseRounded, SaveRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface IActionModalProps {
  event?: IEvent;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const ActionModal = (props: IActionModalProps) => {
  const { event, isOpen, setIsOpen } = props;
  const { t } = useTranslation("calendar");

  let form = useFormik({
    initialValues: event ? { ...event } : { ...emptyEvent },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 2,
          border: "none",
        }}
        role="presentation"
      >
        <Stack>
          <IconButton
            sx={{ marginLeft: "auto", display: "inline" }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseRounded />
          </IconButton>
        </Stack>
        <Typography variant="h6" display="flex" padding={2}>
          {form.values.id ? t("editEvent") : t("addEvent")}
        </Typography>

        <form onSubmit={form.handleSubmit}>
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
        </form>
        <Stack padding={2}>
          <Button
            sx={{ border: "none !important", marginLeft: "auto" }}
            startIcon={<SaveRounded />}
            color="success"
            variant="contained"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {t("form.save")}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ActionModal;
