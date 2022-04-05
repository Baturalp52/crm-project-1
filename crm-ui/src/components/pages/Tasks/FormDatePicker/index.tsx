// @mui
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
// date-fns
import frLocale from "date-fns/locale/fr";
// formik
import { useFormikContext } from "formik";

interface Props {
  label: string;
}
interface Formik {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const FormDatePicker = (props: Props) => {
  const { label } = props;
  const { values, setFieldValue }: Formik = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
      <DatePicker
        label={label}
        value={values.endDate}
        onChange={(date) => {
          setFieldValue("endDate", date);
        }}
        renderInput={(params) => <TextField sx={{ m: 1 }} {...params} />}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;
