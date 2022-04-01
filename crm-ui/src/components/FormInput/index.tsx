// react
import React from "react";
// @mui
import { FormControl, Input, InputLabel } from "@mui/material";
// formik
import { useFormikContext } from "formik";

interface IFormInputProps {
  label: string;
  type: "text" | "email" | "number" | "password";
  name: string;
  disabled?: boolean;
  value?: any;
  onChange?: (e: any) => void;
}

const FormInput = (props: IFormInputProps) => {
  const { label, type, name, disabled, value, onChange } = props;
  const { values, setFieldValue } = useFormikContext();
  const handleChange = onChange
    ? onChange
    : (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event.target.value);
      };
  return (
    <FormControl sx={{ width: "100%", m: 1 }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        value={value ? value : (values as any)[name]}
        type={type}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default FormInput;
