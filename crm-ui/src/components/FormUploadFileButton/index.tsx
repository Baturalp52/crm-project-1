// react
import { useState } from "react";
// @mui
import { Button } from "@mui/material";
import { FileUpload } from "@mui/icons-material";
// formik
import { useFormikContext } from "formik";

import BaseService from "../../services/";

interface Props {
  label: string;
  name: string;
}

export default function FormUploadFileButton({ name, label }: Props) {
  const { setFieldValue } = useFormikContext();
  const [buttonLabel, setButtonLabel] = useState(label);

  const handleUploadNewFile = async (event: any) => {
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append("CVFile", file);
    const { data } = await BaseService.post("upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setFieldValue(name, data);
    setButtonLabel(file.name);
  };
  return (
    <Button component="label" color="secondary">
      <FileUpload /> {buttonLabel}
      <input
        type="file"
        hidden
        onChange={handleUploadNewFile}
        accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
    </Button>
  );
}
