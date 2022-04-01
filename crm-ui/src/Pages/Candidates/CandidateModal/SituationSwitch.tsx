// @mui
import { Check, Close } from "@mui/icons-material";
import { Switch, FormControlLabel } from "@mui/material";
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
  const { label, dropdownLabel } = props;
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
            {...props}
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
          label={dropdownLabel}
          name="placedJob"
          data={jobs}
          defaultValue={dropdownLabel}
          dataToValue={(item) => `${item.id} - ${item.name}`}
          getValue={(item) => item.id}
        />
      )}
    </>
  );
};

export default SituationSwitch;
