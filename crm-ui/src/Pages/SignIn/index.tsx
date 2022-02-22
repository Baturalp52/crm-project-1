import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { login } from "../../services/auth";
import { useEffect } from "react";
import { pageRedux } from "../../redux";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { t } = useTranslation("pages", { keyPrefix: "sign-in" });
  const navigate = useNavigate();

  useEffect(() => {
    pageRedux.dispatch({
      type: "CHANGE_TITLE",
      payload: {
        title: "sign-in",
      },
    });
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      username: data.get("username")!.toString(),
      password: data.get("password")!.toString(),
    }).then((res) => {
      if (res === 200) {
        navigate("/");
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("sign-in")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label={t("username")}
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("password")}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("sign-in")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
