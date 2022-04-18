// react
import React, { useEffect, useState } from "react";
// @mui
import {
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
// redux
import { pageRedux } from "../../redux";
// react-i18next
import { useTranslation } from "react-i18next";
//
import { Templates } from "./Templates";

const colors = [
  "primary.main",
  "secondary.main",
  "error.main",
  "warning.main",
  "info.main",
  "success.main",
];

const Settings = () => {
  const { t } = useTranslation("pages", { keyPrefix: "settings" });
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [templateType, setTemplateType] = useState(1);
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "settings",
      },
    });
  });
  return (
    <>
      <Templates
        open={templateModalOpen}
        setOpen={setTemplateModalOpen}
        type={templateType}
      />
      <Paper
        sx={{
          width: "calc(100% - 40px)",
          marginLeft: "auto",
          overflow: "hidden",
          boxShadow: "none",
          p: 1,
        }}
      >
        <Card sx={{ maxWidth: "lg", mx: "auto" }} elevation={8}>
          <CardHeader
            title={t("fields.templates")}
            sx={{
              p: 2,
              backgroundColor: colors[0],
              color: "white",
            }}
          />
          <CardContent sx={{ px: 5 }}>
            <Stack direction="row">
              <Tooltip
                title={t("sms-templates.label") as string}
                arrow
                placement="top"
              >
                <IconButton
                  sx={{ m: 1 }}
                  onClick={() => {
                    setTemplateType(1);
                    setTemplateModalOpen(true);
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: "45px",
                      m: 1,
                      color: colors[0],
                    }}
                  >
                    {t("sms-templates.icon")}
                  </Icon>
                </IconButton>
              </Tooltip>
              <Tooltip
                title={t("email-templates.label") as string}
                arrow
                placement="top"
              >
                <IconButton
                  sx={{ m: 1 }}
                  onClick={() => {
                    setTemplateType(2);
                    setTemplateModalOpen(true);
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: "45px",
                      m: 1,
                      color: colors[1],
                    }}
                  >
                    {t("email-templates.icon")}
                  </Icon>
                </IconButton>
              </Tooltip>
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default Settings;
