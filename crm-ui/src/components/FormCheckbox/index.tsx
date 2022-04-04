// react
import React from "react";
// @mui
import { FormControlLabel, Checkbox } from "@mui/material";
// formik
import { useFormikContext } from "formik";

type Props = {
  name: string;
  label?: string;
  other?: any;
};
const FormInput = (props: Props) => {
  const { name, label, ...other } = props;
  const { setFieldValue, values } = useFormikContext();
  const handleChange = (e: any) => {
    setFieldValue(name, e.target.checked);
  };

  return (
    <FormControlLabel
      name={name}
      sx={{ m: 1 }}
      control={
        <Checkbox checked={(values as any)[name!]} onChange={handleChange} />
      }
      label={label || ""}
      {...other}
    />
  );
};

export default FormInput;
