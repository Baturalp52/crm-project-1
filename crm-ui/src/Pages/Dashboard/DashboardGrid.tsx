import React from "react";
import { Grid } from "@mui/material";
import GridItem from "./GridItem";
import { Apartment, ListAlt, People, WorkOutlined } from "@mui/icons-material";
import candidates from "../../mockData/candidates";
import companies from "../../mockData/companies";
import tasks from "../../mockData/tasks";
import jobs from "../../mockData/jobs";
import hrmembers from "../../mockData/hrmembers";

const DashboardGrid = () => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      sx={{ width: "calc(100% - 40px)", marginLeft: "auto" }}
      padding={2}
    >
      <GridItem
        title="Candidates"
        icon={<People />}
        data={candidates.length}
        color="#9c27b0"
        link="/candidates"
      />
      <GridItem
        title="Companies"
        icon={<Apartment />}
        data={companies.length}
        color="#0288d1"
        link="/companies"
      />
      <GridItem
        title="Tasks"
        icon={<ListAlt />}
        data={tasks.length}
        color="#2e7d32"
        link="/tasks"
      />
      <GridItem
        title="Jobs"
        icon={<WorkOutlined />}
        data={jobs.length}
        color="#ed6c02"
        link="/jobs"
      />
      <GridItem
        title="HR Members"
        icon={<People />}
        data={hrmembers.length}
        color="#9c27b0"
        link="/hr-members"
      />
    </Grid>
  );
};

export default DashboardGrid;
