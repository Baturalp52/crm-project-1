import { Button } from "@mui/material";
import { FileUpload } from "@mui/icons-material";
import { useFormikContext } from "formik";

interface Props {
  label: string;
  name: string;
}

export default function FormUploadFileButton({ name, label }: Props) {
  const { setFieldValue } = useFormikContext();

  const handleUploadNewFile = (event: any) => {
    const file = event.target.files[0];
    setFieldValue(name, file);
  };
  return (
    <Button component="label" color="secondary">
      <FileUpload /> {label}
      <input type="file" hidden onChange={handleUploadNewFile} />
    </Button>
  );
}
