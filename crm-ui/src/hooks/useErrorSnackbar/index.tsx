import { useState } from "react";
import ErrorSnackbar from "../../components/ErrorSnackbar";

export default function useErrorSnackbar(label: string) {
  const [open, setOpen] = useState<boolean>(false);
  const snackbar = (
    <ErrorSnackbar open={open} setOpen={setOpen} label={label} />
  );
  return {
    setOpen,
    snackbar,
  };
}
