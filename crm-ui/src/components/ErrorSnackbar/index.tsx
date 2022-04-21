import { Alert, Snackbar } from "@mui/material";

interface IErrorSnackbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  label: string;
}

const ErrorSnackbar = (props: IErrorSnackbarProps) => {
  const { open, setOpen, label } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity="error"
        sx={{ width: "100%" }}
      >
        {label}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
