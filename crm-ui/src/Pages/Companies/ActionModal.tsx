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
import { emptyCompany } from "./emptyCompany";
import FormInput from "../../components/FormInput";
import { CloseRounded, SaveRounded } from "@mui/icons-material";
import { ICompany } from "../../mockData/interfaces/Company";

interface IActionModalProps {
  company?: ICompany;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
  t: (key: string) => string;
}

const ActionModal = (props: IActionModalProps) => {
  const { company, isOpen, setIsOpen, t } = props;

  let form = useFormik({
    initialValues: company ? { ...company } : { ...emptyCompany },
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
          width: "95%",
          height: "80%",
          bgcolor: "background.paper",
          border: "none",
        }}
      >
        <Typography variant="h6" display="flex" padding={2}>
          {form.values.id ? t("edit") : t("add")}
          <IconButton
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseRounded />
          </IconButton>
        </Typography>
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
