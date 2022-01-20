import React from "react";
import { Grid } from "@mui/material";
import DashboardCard from "../../components/DashboardCard";
import { useNavigate } from "react-router-dom";

interface IGridItemProps {
  title: string;
  icon: JSX.Element | JSX.IntrinsicElements;
  data: string | number;
  color: string;
  link: string;
}

const GridItem = (props: IGridItemProps) => {
  const navigate = useNavigate();
  const { link } = props;
  return (
    <Grid
      item
      xs={12}
      md={3}
      onClick={() => {
        navigate(link);
      }}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <DashboardCard {...props} />
    </Grid>
  );
};

export default GridItem;
