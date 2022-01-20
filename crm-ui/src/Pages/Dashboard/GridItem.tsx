import React from "react";
import { Grid } from "@mui/material";
import DashboardCard from "../../components/DashboardCard";

interface IGridItemProps {
  title: string;
  icon: JSX.Element | JSX.IntrinsicElements;
  data: string | number;
  color: string;
}

const GridItem = (props: IGridItemProps) => {
  return (
    <Grid item xs={12} md={3}>
      <DashboardCard {...props} />
    </Grid>
  );
};

export default GridItem;
