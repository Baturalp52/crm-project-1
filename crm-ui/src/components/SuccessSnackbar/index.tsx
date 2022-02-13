import { Alert, Snackbar } from "@mui/material";

interface ISuccessSnackbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  label: string;
}

const SuccessSnackbar = (props: ISuccessSnackbarProps) => {
  const { open, setOpen, label } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        {label}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
