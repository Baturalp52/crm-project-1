// @mui
import { Check, Close } from "@mui/icons-material";
import { Switch, FormControlLabel, MenuItem } from "@mui/material";
// formik
import { useFormikContext } from "formik";
// interfaces
import { IJob } from "../../../interfaces/Job";
// components
import FormDropdown from "../../../components/FormDropdown";
// swr
import useSWR from "swr";

interface Formik {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const SituationSwitch = (props: any) => {
  const { label, DropdownLabel, ...other } = props;
  const { values, setFieldValue }: Formik = useFormikContext();
  const { data: jobs } = useSWR("jobs");
  return (
    <>
      <FormControlLabel
        value="start"
        control={
          <Switch
            checked={values.situation}
            onChange={() => {
              setFieldValue("situation", !values.situation);
            }}
            {...other}
            checkedIcon={
              <Check
                sx={{
                  backgroundColor: "success.main",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            }
            icon={
              <Close
                sx={{
                  backgroundColor: "error.main",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            }
          />
        }
        label={label}
        labelPlacement="start"
      />{" "}
      {values.situation && jobs && (
        <FormDropdown<IJob>
          label={DropdownLabel}
          name="placedJob"
          options={jobs}
          defaultValue={DropdownLabel}
          renderOptions={(option) => (
            <MenuItem value={option.id}>
              {option.id + " - " + option.name}
            </MenuItem>
          )}
        />
      )}
    </>
  );
};

export default SituationSwitch;
