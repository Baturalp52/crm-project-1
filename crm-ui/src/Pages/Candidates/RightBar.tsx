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
import { ICandidate } from "../../mockData/interfaces/Candidate";
import { emptyCandidate } from "./emptyCandidate";
import FormInput from "../../components/FormInput";
import { CloseRounded, FileUpload, SaveRounded } from "@mui/icons-material";
import FormMultiTextInput from "../../components/FormMultiTextInput";
import MapsInput from "../../components/MapsInput";
import mainCoord from "../../mockData/coords";

interface IRightBarProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const mockPhones = ["05000000050", "05000000051"];

const mockEmails = ["example@example.com", "example@example.com"];

const mockPreviousJobs = ["Job 1", "Job 2"];

const mockDepartments = ["Department 1", "Department 2"];

const mockKeywords = ["Keyword 1", "Keyword 2"];

const RightBar = (props: IRightBarProps) => {
  const { candidate, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: candidate ? { ...candidate } : { ...emptyCandidate },
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
                label="Surname"
                type="text"
                value={form.values.surname}
                name="surname"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              {form.values.id ? (
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" color="success">
                    <SaveRounded /> Download CV
                  </Button>
                  <Button variant="contained" color="secondary">
                    <FileUpload /> Upload New CV
                  </Button>
                </Stack>
              ) : (
                <Button variant="contained" color="secondary">
                  <FileUpload /> Upload CV
                </Button>
              )}
            </ListItem>
            <ListItem>
              <FormMultiTextInput
                label="Phone Numbers:"
                id="phone-numbers"
                data={mockPhones}
              />
            </ListItem>
            <ListItem>
              <FormMultiTextInput
                label="E-mail Addresses:"
                id="email-addresses"
                data={mockEmails}
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
                label="Extra Address"
                type="text"
                value={form.values.extraAddress}
                name="extraAddress"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Zip Code"
                type="text"
                value={form.values.zipCode}
                name="zipCode"
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
              <MapsInput mainCoords={mainCoord} />
            </ListItem>
            <ListItem>
              <FormMultiTextInput
                label="Previous Jobs"
                id="previousJobs"
                data={mockPreviousJobs}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Country"
                type="text"
                value={form.values.country}
                name="country"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Comment"
                type="text"
                value={form.values.comment}
                name="comment"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormInput
                label="Salary Expectation"
                type="number"
                value={form.values.salaryExpectation}
                name="salaryExpectation"
                onChange={form.handleChange}
              />
            </ListItem>
            <ListItem>
              <FormMultiTextInput
                label="Departments:"
                id="departments"
                data={mockDepartments}
              />
            </ListItem>
            <ListItem>
              <FormMultiTextInput
                label="Key Words:"
                id="keywords"
                data={mockKeywords}
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
