// react
import React, { useState, useEffect } from "react";
// @mui
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
import { Close, Send } from "@mui/icons-material";
// interfaces
import ITemplate from "../../../../interfaces/Template";
import { ICandidate } from "../../../../interfaces/Candidate";
// react-i18next
import { useTranslation } from "react-i18next";
// helpers
import resolve from "../../../../helpers/resolve";
// formik
import { useFormikContext } from "formik";
// swr
import useSWR from "swr";
// components
import Loading from "../../../../components/Loading";

function createText(template: ITemplate, candidate: ICandidate) {
  let index = 0;
  console.log(template.template.split(/%(\w+|\w+.\w+)%/g));
  const text = template.template
    .split(/%(\w+|\w+.\w+)%/g)
    .reduce((text: string, item: string) => {
      if (index % 2 === 0) text += item;
      else text += resolve(item, candidate);
      index++;
      return text;
    }, "");
  return text;
}

interface ISendMessageModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  messageType: number;
}

interface Formik {
  values: ICandidate;
}

const SendMessageModal = (props: ISendMessageModalProps) => {
  const { isOpen, setIsOpen, messageType } = props;
  const { values: candidate }: Formik = useFormikContext();
  const { data, error } = useSWR(`settings/templates?type=${messageType}`);

  const [templatesData, setTemplatesData] = useState(data);
  const [template, setTemplate] = useState<ITemplate>({
    id: 0,
    name: "",
    template: "",
    type: 0,
  });
  const { t } = useTranslation("pages", {
    keyPrefix: "candidates.modal.send-message",
  });
  useEffect(() => {
    setTemplatesData(data);
  }, [isOpen, data]);
  const handleSend = () => {
    console.log(createText(template, candidate));
    setIsOpen(false);
  };
  if (error) return <div>{error}</div>;
  if (!templatesData) return <React.Suspense fallback={<Loading />} />;
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setTemplate({
          id: 0,
          name: "",
          template: "",
          type: 0,
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
                type: 0,
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
                  ? templatesData.filter(
                      (item: ITemplate) => item.id === e.target.value
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
            {templatesData.map((temp: ITemplate) => (
              <MenuItem key={temp.id} value={temp.id}>
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
                  .map((item: string, index: number) => {
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
                onClick={handleSend}
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
