import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";
import React from "react";

interface IFormDropdownProps<DataType> {
  label: string;
  handleChange: (e: any) => void;
  datas: DataType[];
  defaultValue: string;
  dataToValue: (data: DataType) => string;
  selectedValue: number | string;
  disabled?: boolean;
  width?: string;
  sx?: SxProps;
  getValue: (data: DataType) => string | number;
}

const FormDropdown = <DataType extends { id: number } | string>(
  props: IFormDropdownProps<DataType>
) => {
  const {
    label,
    handleChange,
    defaultValue,
    datas,
    dataToValue,
    selectedValue,
    disabled,
    width,
    getValue,
    sx,
  } = props;
  return (
    <FormControl
      variant="standard"
      disabled={disabled}
      sx={{ width: "100%" || width, m: 1, ...sx }}
    >
      <InputLabel>{label}</InputLabel>

      <Select value={selectedValue} label={label} onChange={handleChange}>
        <MenuItem value={0}>
          <em>{defaultValue}</em>
        </MenuItem>
        {datas.map((data: DataType, index) => (
          <MenuItem key={index} value={getValue(data)}>
            {dataToValue(data)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormDropdown;
