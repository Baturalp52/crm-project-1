import React, { useEffect } from "react";
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
import { pageRedux } from "../../redux";
import { useTranslation } from "react-i18next";

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
  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "settings",
      },
    });
  });
  return (
    <Paper
      sx={{
        width: "calc(100% - 40px)",
        marginLeft: "auto",
        overflow: "hidden",
        boxShadow: "none",
        p: 1,
      }}
    >
      {(t("fields", { returnObjects: true }) as []).map(
        (item: any, index: number) => (
          <Card key={index} sx={{ maxWidth: "lg", mx: "auto" }} elevation={8}>
            <CardHeader
              title={item.title}
              sx={{
                p: 2,
                backgroundColor: colors[index % colors.length],
                color: "white",
              }}
            />
            <CardContent sx={{ px: 5 }}>
              <Stack direction="row">
                {item.buttons.map((item: any, index: number) => (
                  <Tooltip title={item.label} arrow placement="top" key={index}>
                    <IconButton sx={{ m: 1 }}>
                      <Icon
                        sx={{
                          fontSize: "45px",
                          m: 1,
                          color: colors[index % colors.length],
                        }}
                      >
                        {item.icon}
                      </Icon>
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </CardContent>
          </Card>
        )
      )}
    </Paper>
  );
};

export default Settings;
