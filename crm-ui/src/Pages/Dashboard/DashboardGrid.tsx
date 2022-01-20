import React from "react";
import { Grid } from "@mui/material";
import GridItem from "./GridItem";
import { Apartment, ListAlt, People } from "@mui/icons-material";
import candidates from "../../mockData/candidates";
import companies from "../../mockData/companies";
import tasks from "../../mockData/tasks";

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
      <GridItem
        title="Companies"
        icon={<Apartment />}
        data={companies.length}
        color="#0288d1"
      />
      <GridItem
        title="Tasks"
        icon={<ListAlt />}
        data={tasks.length}
        color="#2e7d32"
      />
    </Grid>
  );
};

export default DashboardGrid;
