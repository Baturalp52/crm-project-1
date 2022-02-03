import React, { useReducer } from "react";
import { Button, Grid, Modal, Paper, Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

function searchReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_VALUE":
      state[action.payload.filterName] = action.payload.value;
      return state;
    default:
      return state;
  }
}

const AdvancedSearchModal = (props: {
  isOpen: boolean;
  setIsOpen: (t: boolean) => void;
  filters: { label: string; name: string }[];
  searchForm: any;
}) => {
  const { isOpen, setIsOpen, filters, searchForm } = props;
  const [search, searchDispatch] = useReducer(searchReducer, {});
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "50%",
          bgcolor: "background.paper",
          border: "none",
          padding: 3,
          display: "flex",
        }}
      >
        <Grid container>
          {filters.map((filter) => (
            <Grid item xs={12} md={4}>
              <TextField
                label={filter.label}
                type="text"
                name={filter.name}
                value={search[filter.name]}
                variant="standard"
                onChange={(e) => {
                  searchDispatch({
                    type: "CHANGE_VALUE",
                    payload: { filterName: filter.name, value: e.target.value },
                  });
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
            }}
            startIcon={<Search />}
          >
            Search
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default AdvancedSearchModal;
