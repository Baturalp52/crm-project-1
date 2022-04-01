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
}

const FormMultiTextInput = (props: IFormMultiTextInputProps) => {
  const { label, name, id } = props;
  const { values, setFieldValue } = useFormikContext();

  const onChange = (event: React.SyntheticEvent, newValue: any[]) => {
    setFieldValue(name, newValue);
  };

  return (
    <Autocomplete
      multiple
      options={[]}
      id={id}
      freeSolo
      value={(values as any)[name]}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} name={name} label={label} placeholder={label} />
      )}
    />
  );
};

export default FormMultiTextInput;
