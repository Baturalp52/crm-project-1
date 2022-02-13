import { useState } from "react";
import SuccessSnackbar from "../../components/SuccessSnackbar";

export default function useSuccessSnackbar(label: string) {
  const [open, setOpen] = useState<boolean>(false);
  const snackbar = (
    <SuccessSnackbar open={open} setOpen={setOpen} label={label} />
  );
  return {
    setOpen,
    snackbar,
  };
}
