import { Home } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Page404 = () => {
  const { t } = useTranslation("pages", { keyPrefix: "page-404" });
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1">
          404
        </Typography>
        <Typography component="h2" variant="h2">
          {t("not-found")}
        </Typography>
        <Button variant="contained" LinkComponent="a" href="/">
          <Home /> {t("return-home")}
        </Button>
      </Box>
    </Container>
  );
};

export default Page404;
