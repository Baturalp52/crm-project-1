import React from "react";
import { Grid } from "@mui/material";
import GridItem from "./GridItem";
import { People } from "@mui/icons-material";
import candidates from "../../mockData/candidates";

const DashboardGrid = () => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      sx={{ width: "calc(100% - 40px)", marginLeft: "auto" }}
    >
      <GridItem
        title="Candidates"
        icon={<People />}
        data={candidates.length}
        color="#9c27b0"
      />
    </Grid>
  );
};

export default DashboardGrid;
