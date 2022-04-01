// react
import React from "react";
// @mui
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";
// formik
import { useFormikContext } from "formik";

interface IFormDropdownProps<DataType> {
  label: string;
  name?: string;
  data: DataType[];
  defaultValue: string;
  dataToValue: (data: DataType) => string;
  disabled?: boolean;
  width?: string;
  sx?: SxProps;
  getValue: (data: DataType) => string | number;
  onChange?: (e: SelectChangeEvent) => void;
  selectedValue?: any;
}

const FormDropdown = <DataType extends { id: number }>(
  props: IFormDropdownProps<DataType>
) => {
  const {
    label,
    defaultValue,
    data,
    name,
    disabled,
    dataToValue,
    width,
    getValue,
    sx,
    onChange,
    selectedValue,
  } = props;
  const { values, setFieldValue } = useFormikContext();

  const handleChange = onChange
    ? onChange
    : (e: SelectChangeEvent) => {
        setFieldValue(
          name || "",
          data.filter((item: DataType) => item.id === Number(e.target.value))[0]
        );
      };
  const selected = selectedValue || (values as any)[name || ""];

  return (
    <FormControl
      variant="standard"
      disabled={disabled}
      sx={{ width: "100%" || width, m: 1, ...sx }}
    >
      <InputLabel>{label}</InputLabel>

      <Select value={selected || 0} label={label} onChange={handleChange}>
        <MenuItem value={0}>
          <em>{defaultValue}</em>
        </MenuItem>
        {data.map((item: DataType, index) => (
          <MenuItem key={index} value={getValue(item)}>
            {dataToValue(item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormDropdown;
