import React, { useEffect, useState } from "react";
// @mui
import {
  Modal,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  CardActions,
  Chip,
} from "@mui/material";
import { CloseRounded, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
// hooks
import useSuccessSnackbar from "../../../hooks/useSuccessSnackbar";
// react-i18next
import { useTranslation } from "react-i18next";
// service
import BaseService from "../../../services";
// interfaces
import ITemplate from "../../../interfaces/Template";

interface ITemplateModalProps {
  open: boolean;
  setOpen(open: boolean): any;
  mutate: VoidFunction;
  template?: ITemplate;
  type: number;
}

const variables = [
  "name",
  "surname",
  "CVAddress",
  "phoneNumbers",
  "emailAdresses",
  "address",
  "extraAddress",
  "zipCode",
  "city",
  "country",
  "mapsCoord",
  "jobs",
  "mobility",
  "skills",
  "comment",
  "salaryExpectation",
  "departments",
  "keywords",
  "diplomas",
  "situation",
  "tasks",
];

const TemplateModal = (props: ITemplateModalProps) => {
  const { open, setOpen, template, type, mutate } = props;
  const { t } = useTranslation("pages", {
    keyPrefix: "settings.template.modal",
  });

  const [templateData, setTemplateData] = useState(
    template || { type: type, name: "", template: "" }
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTemplateData(template || { type: type, name: "", template: "" });
  }, [open, template, type]);

  const { setOpen: setSuccessbar, snackbar: SuccessSnack } = useSuccessSnackbar(
    t("success-snack-label")
  );

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = async () => {
    setIsLoading(true);
    let response;
    if (templateData.id)
      response = await BaseService.put(
        `settings/templates/${type}/${templateData.id}/`,
        templateData
      );
    else
      response = await BaseService.post(
        `settings/templates/${type}`,
        templateData
      );
    if (response.status === 201) {
      setIsLoading(false);
      setSuccessbar(true);
      setOpen(false);
      mutate();
    }
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cTemplate = { ...templateData };
    cTemplate.name = e.target.value;
    setTemplateData(cTemplate);
  };
  const handleTemplateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cTemplate = { ...templateData };
    cTemplate.template = e.target.value;
    setTemplateData(cTemplate);
  };
  const handleAddVariable = (variable: string) => {
    const cTemplate = { ...templateData };
    cTemplate.template += " %" + variable + "% ";
    setTemplateData(cTemplate);
  };

  return (
    <>
      {SuccessSnack}
      <Modal open={open} onClose={handleClose}>
        <Card
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "65%",
            maxHeight: "400px",
            overflow: "scroll",
            bgcolor: "background.paper",
            border: "none",
          }}
        >
          <CardHeader
            sx={{ p: 2, bgcolor: "success.dark", color: "white" }}
            title={template ? t("edit") : t("add")}
            action={
              <IconButton onClick={handleClose}>
                <CloseRounded htmlColor="white" />
              </IconButton>
            }
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={templateData.name}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Template"
                  fullWidth
                  multiline
                  rows={4}
                  value={templateData.template}
                  onChange={handleTemplateChange}
                />
              </Grid>
              <Grid item xs={12} direction="row">
                {variables.map((variableName, index) => (
                  <Chip
                    key={index}
                    onClick={() => handleAddVariable(variableName)}
                    label={variableName}
                    sx={{ margin: 1 }}
                  />
                ))}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ padding: 2 }}>
            <LoadingButton
              color="success"
              variant="contained"
              sx={{ ml: "auto" }}
              onClick={handleSave}
              loading={isLoading}
            >
              <Save htmlColor="white" />
              {t("save")}
            </LoadingButton>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default TemplateModal;
