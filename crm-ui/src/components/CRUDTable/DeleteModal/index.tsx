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
import BaseService from "../../../services/index";
import { useSWRConfig } from "swr";

interface IDeleteModal {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedIds: number[];
}

const DeleteModal = (props: IDeleteModal) => {
  const { open, setOpen, selectedIds } = props;
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.delete-modal",
  });
  const { mutate } = useSWRConfig();
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
            onClick={async () => {
              await selectedIds.map((id) =>
                BaseService.delete(`${window.location.pathname}/${id}`)
              );
              setOpen(false);
              mutate(window.location.pathname);
            }}
          >
            {t("delete")}
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default DeleteModal;
