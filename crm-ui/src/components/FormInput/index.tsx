import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";

interface IFormInputProps {
  label: string;
  type: "text" | "email" | "number" | "password";
  value: number | string | undefined;
  name: string;
  disabled?: boolean;
  onChange(e: any): void;
}

const FormInput = (props: IFormInputProps) => {
  const { label, type, value, name, onChange, disabled } = props;
  return (
    <FormControl error={!Boolean(value)} sx={{ width: "100%", m: 1 }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default FormInput;
