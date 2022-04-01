// react
import React from "react";
// @mui
import { TextField, Autocomplete } from "@mui/material";
// formik
import { useFormikContext } from "formik";

interface IFormMultiTextInputProps {
  label: string;
  id: string;
  name: string;
  options?: string[];
}

const FormMultiTextInput = (props: IFormMultiTextInputProps) => {
  const { label, name, id, options } = props;
  const { values, setFieldValue } = useFormikContext();

  const onChange = (event: React.SyntheticEvent, newValue: any[]) => {
    setFieldValue(name, newValue);
  };

  return (
    <Autocomplete
      sx={{ width: "100%", m: 1 }}
      multiple
      options={options || []}
      id={id}
      freeSolo
      value={(values as any)[name] || []}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} name={name} label={label} placeholder={label} />
      )}
    />
  );
};

export default FormMultiTextInput;
