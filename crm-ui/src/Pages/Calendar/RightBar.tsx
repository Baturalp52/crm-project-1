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
import { IEvent } from "../../mockData/interfaces/Event";
import { emptyEvent } from "./emptyEvent";
import FormInput from "../../components/FormInput";
import { CloseRounded, SaveRounded } from "@mui/icons-material";

interface IRightBarProps {
  event?: IEvent;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const RightBar = (props: IRightBarProps) => {
  const { event, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: event ? { ...event } : { ...emptyEvent },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={{ width: 400, overflow: "auto" }} role="presentation">
        <Typography variant="h6" display="flex" padding={2}>
          {form.values.id ? "Edit Event" : "Add New"}
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
                label="Title"
                type="text"
                value={form.values.title}
                name="title"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Description"
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
            Save
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default RightBar;
