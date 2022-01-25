import React from "react";
import { Grid } from "@mui/material";
import GridItem from "./GridItem";
import {
  Apartment,
  CalendarToday,
  ListAlt,
  People,
  WorkOutlined,
} from "@mui/icons-material";
import candidates from "../../mockData/candidates";
import companies from "../../mockData/companies";
import tasks from "../../mockData/tasks";
import jobs from "../../mockData/jobs";
import hrmembers from "../../mockData/hrmembers";
import { events } from "../../mockData/events";
import { useTranslation } from "react-i18next";

const DashboardGrid = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      sx={{ width: "calc(100% - 40px)", marginLeft: "auto" }}
      padding={2}
    >
      <GridItem
        title={t("candidates")}
        icon={<People />}
        data={candidates.length}
        color="#9c27b0"
        link="/candidates"
      />
      <GridItem
        title={t("companies")}
        icon={<Apartment />}
        data={companies.length}
        color="#0288d1"
        link="/companies"
      />
      <GridItem
        title={t("tasks")}
        icon={<ListAlt />}
        data={tasks.length}
        color="#2e7d32"
        link="/tasks"
      />
      <GridItem
        title={t("jobs")}
        icon={<WorkOutlined />}
        data={jobs.length}
        color="#ed6c02"
        link="/jobs"
      />
      <GridItem
        title={t("hrMembers")}
        icon={<People />}
        data={hrmembers.length}
        color="#9c27b0"
        link="/hr-members"
      />
      <GridItem
        title={t("events")}
        icon={<CalendarToday />}
        data={events.length}
        color="#0288d1"
        link="/calendar"
      />
    </Grid>
  );
};

export default DashboardGrid;
