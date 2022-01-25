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
}

const ActionModal = (props: IActionModalProps) => {
  const { company, isOpen, setIsOpen } = props;

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
          {form.values.id ? "Edit Company" : "Add New"}
          <IconButton
            sx={{ marginLeft: "auto", display: "inline" }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseRounded />
          </IconButton>
        </Typography>

        <form onSubmit={form.handleSubmit}>
          <List>
            <ListItem>
              <FormInput
                label="id"
                type="number"
                value={form.values.id}
                name="id"
                onChange={form.handleChange}
                disabled
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Name"
                type="text"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Address"
                type="text"
                value={form.values.address}
                name="address"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="City"
                type="text"
                value={form.values.city}
                name="city"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Sector"
                type="text"
                value={form.values.sector}
                name="sector"
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
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ActionModal;
