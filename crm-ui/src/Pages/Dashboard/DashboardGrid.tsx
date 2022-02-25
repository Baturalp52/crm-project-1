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
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import Loading from "../../components/Loading";

const DashboardGrid = () => {
  const { t } = useTranslation();
  const { data } = useSWR("dashboard");
  if (!data) return <Loading />;
  const { candidates, companies, tasks, jobs, hrmembers, events } = data.counts;
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
        data={candidates}
        color="#9c27b0"
        link="/candidates"
      />
      <GridItem
        title={t("companies")}
        icon={<Apartment />}
        data={companies}
        color="#0288d1"
        link="/companies"
      />
      <GridItem
        title={t("tasks")}
        icon={<ListAlt />}
        data={tasks}
        color="#2e7d32"
        link="/tasks"
      />
      <GridItem
        title={t("jobs")}
        icon={<WorkOutlined />}
        data={jobs}
        color="#ed6c02"
        link="/jobs"
      />
      <GridItem
        title={t("hrMembers")}
        icon={<People />}
        data={hrmembers}
        color="#9c27b0"
        link="/hr-members"
      />
      <GridItem
        title={t("events")}
        icon={<CalendarToday />}
        data={events}
        color="#0288d1"
        link="/calendar"
      />
    </Grid>
  );
};

export default DashboardGrid;
