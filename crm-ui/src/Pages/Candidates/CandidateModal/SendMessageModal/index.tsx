import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import templateDatas from "./datas";
import { ICandidate } from "../../../../interfaces/Candidate";
import { Close, Send } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import resolve from "../../../../helpers/resolve";

interface ISendMessageModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  messageType: "sms" | "email";
  candidate: ICandidate;
}

interface ITemplate {
  id: number;
  name: string;
  template: string;
}

const SendMessageModal = (props: ISendMessageModalProps) => {
  const { isOpen, setIsOpen, messageType, candidate } = props;
  const [template, setTemplate] = useState<ITemplate>({
    id: 0,
    name: "",
    template: "",
  });
  const { t } = useTranslation("pages", {
    keyPrefix: "candidates.modal.send-message",
  });
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setTemplate({
          id: 0,
          name: "",
          template: "",
        });
        setIsOpen(false);
      }}
    >
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "55%",
          bgcolor: "background.paper",
          border: "none",
          padding: 2,
        }}
      >
        <Stack mb={5}>
          <IconButton
            sx={{ ml: "auto" }}
            onClick={() => {
              setTemplate({
                id: 0,
                name: "",
                template: "",
              });
              setIsOpen(false);
            }}
          >
            <Close />
          </IconButton>
        </Stack>
        <FormControl fullWidth>
          <InputLabel id="select-temp-label">{t("template")}</InputLabel>
          <Select
            value={template.id}
            labelId="select-temp-label"
            id="select-temp"
            label="Template"
            onChange={(e) => {
              setTemplate(
                e.target.value
                  ? templateDatas[messageType].filter(
                      (item: any) => item.id === e.target.value
                    )[0]
                  : {
                      id: 0,
                      name: "",
                      template: "",
                    }
              );
            }}
          >
            <MenuItem value={0}> {t("select-template")} </MenuItem>
            {templateDatas[messageType].map((temp, index) => (
              <MenuItem key={index} value={temp.id}>
                {temp.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {Boolean(template.id) && (
          <>
            <Card sx={{ mt: 3 }}>
              <CardHeader title={template.name} />
              <CardContent sx={{ lineHeight: 2 }}>
                {template.template
                  .split(/%(\w+|\w+.\w+)%/g)
                  .map((item, index) => {
                    return index % 2 === 0 ? (
                      item
                    ) : (
                      <Typography
                        variant="subtitle2"
                        component="span"
                        color="white"
                        sx={{
                          backgroundColor: "error.main",
                          borderRadius: "3px",
                          padding: 0.3,
                          mx: 1,
                          display: "inline-block",
                        }}
                      >
                        {resolve(item, candidate)}
                      </Typography>
                    );
                  })}
              </CardContent>
            </Card>
            <Stack mt={3}>
              <Button
                endIcon={<Send />}
                sx={{ ml: "auto" }}
                variant="contained"
                color="primary"
                onClick={() => {
                  setTemplate({
                    id: 0,
                    name: "",
                    template: "",
                  });
                  setIsOpen(false);
                }}
              >
                {t("send")}
              </Button>
            </Stack>
          </>
        )}
      </Paper>
    </Modal>
  );
};

export default SendMessageModal;
