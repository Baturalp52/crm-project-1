import React, { useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import IFilter from "../../../interfaces/Filter";

const AdvancedSearchModal = (props: {
  isOpen: boolean;
  setIsOpen: (t: boolean) => void;
  filters: IFilter[];
  searchForm: any;
}) => {
  const { isOpen, setIsOpen, filters, searchForm } = props;
  const [search, setSearch] = useState(searchForm.values.search);
  const { t } = useTranslation("components", {
    keyPrefix: "crudTable.advanced-search-modal",
  });
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "70%",
          minHeight: "60%",
          bgcolor: "background.paper",
          border: "none",
          padding: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack mx="auto">
          <Typography variant="h5" component="h6">
            {t("title")}
          </Typography>
        </Stack>
        <Grid container display="flex" width="100%" textAlign="center">
          {filters.map((filter, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TextField
                label={filter.label}
                type="text"
                name={filter.name}
                value={search[filter.name]}
                variant="standard"
                margin="dense"
                onChange={(e) => {
                  const cSearch = { ...search };
                  cSearch[filter.name] = e.target.value;
                  setSearch(cSearch);
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Stack mt="auto" ml="auto">
          <Button
            variant="contained"
            onClick={() => {
              setIsOpen(false);
              searchForm.setFieldValue("search", search);
              searchForm.submitForm();
            }}
            startIcon={<Search />}
          >
            {t("search")}
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default AdvancedSearchModal;
