// react
import React from "react";
// @mui
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// formik
import { useFormikContext } from "formik";

interface IFormDropdownProps<DataType> {
  label: string;
  name?: string;
  options: DataType[];
  defaultValue: string;
  getSelection?: (option: any, value: any) => any;
  selectedValue?: any;
  onChange?: any;
  renderOptions: (
    option: DataType
  ) => string | React.ReactElement | React.ReactChild | React.ReactChildren;
}

const FormDropdown = <DataType extends { id: number } | string>(
  props: IFormDropdownProps<DataType>
) => {
  const {
    label,
    defaultValue,
    options,
    name,
    getSelection,
    renderOptions,
    selectedValue,
    onChange,
  } = props;
  const { values, handleChange } = useFormikContext();

  const selected = getSelection
    ? options.filter((option) =>
        getSelection(option, (values as any)[name || ""])
      )[0]
    : selectedValue
    ? selectedValue
    : (values as any)[name || ""];

  return (
    <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selected || 0}
        label={label}
        onChange={onChange ? onChange : handleChange}
        name={name}
      >
        <MenuItem value={0}>
          <em>{defaultValue}</em>
        </MenuItem>
        {options.map((item: DataType) => renderOptions(item))}
      </Select>
    </FormControl>
  );
};

export default FormDropdown;
