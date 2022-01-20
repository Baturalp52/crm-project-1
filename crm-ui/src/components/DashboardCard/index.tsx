import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

interface IDashboardCardProps {
  title: string;
  icon: JSX.Element | JSX.IntrinsicElements;
  data: string | number;
  color: string;
}

const DashboardCard = (props: IDashboardCardProps) => {
  const { icon, title, data, color } = props;
  return (
    <Card>
      <CardHeader
        sx={{ backgroundColor: color, color: "white" }}
        avatar={icon}
        title={title}
      />
      <CardContent>
        <Typography variant="h6">{data}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
