import React from "react";
import {
  Card,
  Grid,
  Button,
  Modal,
  IconButton,
  Stack,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import { useFormik } from "formik";
import { ICandidate } from "../../mockData/interfaces/Candidate";
import { emptyCandidate } from "./emptyCandidate";
import FormInput from "../../components/FormInput";
import { CloseRounded, FileUpload, SaveRounded } from "@mui/icons-material";
import FormMultiTextInput from "../../components/FormMultiTextInput";
import MapsInput from "../../components/MapsInput";
import mainCoord from "../../mockData/coords";
import { useTranslation } from "react-i18next";

interface IActionModalProps {
  candidate?: ICandidate;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
}

const mockPhones = ["05000000050", "05000000051"];

const mockEmails = ["example@example.com", "example@example.com"];

const mockPreviousJobs = ["Job 1", "Job 2"];

const mockDepartments = ["Department 1", "Department 2"];

const mockKeywords = ["Keyword 1", "Keyword 2"];

const ActionModal = (props: IActionModalProps) => {
  const { candidate, isOpen, setIsOpen } = props;

  let form = useFormik({
    initialValues: candidate ? { ...candidate } : { ...emptyCandidate },
    onSubmit: () => {},
    enableReinitialize: true,
  });
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Card
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
        <CardHeader
          sx={{ p: 2, bgcolor: "success.dark", color: "white" }}
          title={form.values.id ? "Edit Candidate" : "Add New"}
          action={
            <IconButton
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseRounded htmlColor="white" />
            </IconButton>
          }
        />
        <CardContent sx={{ height: "74%", overflow: "auto" }}>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12} md={4}>
              <FormInput
                label="id"
                type="number"
                value={form.values.id}
                name="id"
                onChange={form.handleChange}
                disabled
              />
              <FormInput
                label="Name"
                type="text"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
              />
              <FormInput
                label="Surname"
                type="text"
                value={form.values.surname}
                name="surname"
                onChange={form.handleChange}
              />
              <FormInput
                label="Address"
                type="text"
                value={form.values.address}
                name="address"
                onChange={form.handleChange}
              />
              <FormInput
                label="Extra Address"
                type="text"
                value={form.values.extraAddress}
                name="extraAddress"
                onChange={form.handleChange}
              />
              <FormInput
                label="Zip Code"
                type="text"
                value={form.values.zipCode}
                name="zipCode"
                onChange={form.handleChange}
              />
              <FormInput
                label="City"
                type="text"
                value={form.values.city}
                name="city"
                onChange={form.handleChange}
              />
              <FormInput
                label="Country"
                type="text"
                value={form.values.country}
                name="country"
                onChange={form.handleChange}
              />
              <FormInput
                label="Comment"
                type="text"
                value={form.values.comment}
                name="comment"
                onChange={form.handleChange}
              />
              <FormInput
                label="Salary Expectation"
                type="number"
                value={form.values.salaryExpectation}
                name="salaryExpectation"
                onChange={form.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormMultiTextInput
                label="Phone Numbers:"
                id="phone-numbers"
                data={mockPhones}
              />
              <FormMultiTextInput
                label="E-mail Addresses:"
                id="email-addresses"
                data={mockEmails}
              />
              <FormMultiTextInput
                label="Previous Jobs"
                id="previousJobs"
                data={mockPreviousJobs}
              />
              <FormMultiTextInput
                label="Departments:"
                id="departments"
                data={mockDepartments}
              />
              <FormMultiTextInput
                label="Key Words:"
                id="keywords"
                data={mockKeywords}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MapsInput mainCoords={mainCoord} />
              {form.values.id ? (
                <Stack sx={{ m: 1 }} direction="row" spacing={1}>
                  <Button variant="contained" color="success">
                    <SaveRounded /> Download CV
                  </Button>
                  <Button variant="contained" color="secondary">
                    <FileUpload /> Upload New CV
                  </Button>
                </Stack>
              ) : (
                <Button sx={{ m: 1 }} variant="contained" color="secondary">
                  <FileUpload /> Upload CV
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            sx={{ border: "none !important", marginLeft: "auto" }}
            startIcon={<SaveRounded />}
            color="success"
            variant="contained"
            onClick={() => {
              setIsOpen(false);
              form.submitForm();
            }}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ActionModal;
