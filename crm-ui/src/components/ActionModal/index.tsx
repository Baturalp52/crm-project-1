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

interface IActionModalProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
  title: string;
  saveFunction: () => void;
  children: React.ReactNode;
}

const ActionModal = (props: IActionModalProps) => {
  const { isOpen, setIsOpen, title, saveFunction, children } = props;
  const { t } = useTranslation("actionModal");
  return (
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
              setIsOpen(false);
              saveFunction();
            }}
          >
            {t("save")}
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ActionModal;
