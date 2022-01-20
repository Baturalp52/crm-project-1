import React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { emptyCompany } from "./emptyCompany";
import FormInput from "./FormInput";
import { CloseRounded, SaveRounded } from "@mui/icons-material";
import { ICompany } from "../../mockData/interfaces/Company";

interface IRightBarProps {
  company?: ICompany;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const RightBar = (props: IRightBarProps) => {
  const { company, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: company ? { ...company } : { ...emptyCompany },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={{ width: 400, overflow: "auto" }} role="presentation">
        <Typography variant="h6" display="flex" padding={2}>
          {form.values.id ? "Edit Candidate" : "Add New"}
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
    </Drawer>
  );
};

export default RightBar;
