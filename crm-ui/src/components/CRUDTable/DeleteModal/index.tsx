import React from "react";
import {
  Modal,
  Paper,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface IDeleteModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DeleteModal = (props: IDeleteModal) => {
  const { open, setOpen } = props;
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.delete-modal",
  });
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "none",
          pt: 1,
          px: 3,
          pb: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton sx={{ ml: "auto", mb: 2 }} onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
        <Typography>{t("are-you-sure")}</Typography>
        <Stack direction="row" justifyContent="space-evenly" mt={2}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            {t("cancel")}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            {t("delete")}
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default DeleteModal;
