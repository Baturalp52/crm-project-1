import { Check, Close } from "@mui/icons-material";
import { Switch, FormControlLabel } from "@mui/material";
const SituationSwitch = (props: any) => {
  const { label } = props;
  return (
    <FormControlLabel
      value="start"
      control={
        <Switch
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
    />
  );
};

export default SituationSwitch;
