import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface IFormDropdownProps<DataType> {
  label: string;
  handleChange: (e: any) => void;
  datas: DataType[];
  defaultValue: string;
  dataToValue: (data: DataType) => string;
  selectedId: number;
  disabled?: boolean;
  width?: string;
}

const FormDropdown = <DataType extends { id: number }>(
  props: IFormDropdownProps<DataType>
) => {
  const {
    label,
    handleChange,
    defaultValue,
    datas,
    dataToValue,
    selectedId,
    disabled,
    width,
  } = props;
  return (
    <FormControl disabled={disabled} sx={{ width: "100%" || width, m: 1 }}>
      <InputLabel>{label}</InputLabel>

      <Select value={selectedId} label={label} onChange={handleChange}>
        <MenuItem value={0}>
          <em>{defaultValue}</em>
        </MenuItem>
        {datas.map((data: DataType) => (
          <MenuItem key={data.id} value={data.id}>
            {dataToValue(data)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormDropdown;
