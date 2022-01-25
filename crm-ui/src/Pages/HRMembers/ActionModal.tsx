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
import { emptyHRMember } from "./emptyHRMember";
import FormInput from "../../components/FormInput";
import { CloseRounded, SaveRounded } from "@mui/icons-material";
import { IHRMember } from "../../mockData/interfaces/HRMember";

interface IActionModalProps {
  hrmember?: IHRMember;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const ActionModal = (props: IActionModalProps) => {
  const { hrmember, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: hrmember ? { ...hrmember } : { ...emptyHRMember },
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
        role="presentation"
      >
        <Typography variant="h6" display="flex" padding={2}>
          {form.values.id ? "Edit HRMember" : "Add New"}
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
                value={form.values.surname}
                name="address"
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
