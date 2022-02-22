import React from "react";
import {
  Button,
  Modal,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import { CloseRounded, SaveRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import useSuccessSnackbar from "../../hooks/useSuccessSnackbar";

interface IActionModalProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
  title: string;
  saveFunction: () => Promise<any> | void;
  children: React.ReactNode;
}

const ActionModal = (props: IActionModalProps) => {
  const { isOpen, setIsOpen, title, saveFunction, children } = props;
  const { t } = useTranslation("components", { keyPrefix: "actionModal" });
  const { setOpen: setSuccessbar, snackbar: SuccessSnack } = useSuccessSnackbar(
    t("success-snack-label")
  );
  return (
    <>
      {SuccessSnack}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Card
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
            height: "85%",
            bgcolor: "background.paper",
            border: "none",
          }}
        >
          <CardHeader
            sx={{ p: 2, bgcolor: "success.dark", color: "white" }}
            title={title}
            action={
              <IconButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <CloseRounded htmlColor="white" />
              </IconButton>
            }
          />
          <CardContent sx={{ height: "76%", overflow: "auto" }}>
            {children}
          </CardContent>
          <CardActions>
            <Button
              sx={{ border: "none !important", marginLeft: "auto" }}
              startIcon={<SaveRounded />}
              color="success"
              variant="contained"
              onClick={() => {
                (saveFunction() as Promise<any>).then(() => {
                  setIsOpen(false);
                  setSuccessbar(true);
                });
              }}
            >
              {t("save")}
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default ActionModal;
