// react
import React from "react";
// @mui
import { TextField, TextFieldProps } from "@mui/material";
// formik
import { useFormikContext } from "formik";

const FormInput = (props: TextFieldProps) => {
  const { name, ...other } = props;
  const { handleChange, values } = useFormikContext();

  return (
    <TextField
      id={name}
      name={name}
      value={(values as any)[name!]}
      fullWidth
      sx={{ m: 1 }}
      onChange={handleChange}
      {...other}
    />
  );
};

export default FormInput;
