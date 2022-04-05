import React, { useState } from "react";
import { AccessTime, AddCircle, Check, Close } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import { useFormikContext } from "formik";

interface IChangeSituationProps {
  title: string;
}

interface Formik {
  setFieldValue: <DataType>(field: string, data: DataType) => void;
  values: any;
}

interface IStyledIconButtonProps {
  selected?: boolean;
  color:
    | "warning"
    | "success"
    | "error"
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | undefined;
  icon: React.ReactElement;
  onClick: () => void;
}

const StyledIconButton = (props: IStyledIconButtonProps) => {
  const { selected, color, icon, onClick } = props;
  return (
    <IconButton
      sx={{
        borderStyle: "solid",
        borderWidth: "thin",
        padding: 0.5,
        margin: 1,
        backgroundColor: selected ? color + ".main" : "white",
        "&:hover": { backgroundColor: selected ? "white" : color + ".main" },
      }}
      onClick={onClick}
      color={color}
    >
      {React.cloneElement(icon, {
        sx: selected
          ? { color: "white", "&:hover": { color: color + ".main" } }
          : { color: color + ".main", "&:hover": { color: "white" } },
      })}
    </IconButton>
  );
};

const ChangeSituation = (props: IChangeSituationProps) => {
  const { title } = props;

  const {
    setFieldValue,
    values: { situation },
  }: Formik = useFormikContext();

  const [selected, setSelected] = useState<
    "on-progress" | "completed" | "closed" | "open" | string
  >(situation || "open");
  return (
    <Paper sx={{ padding: 2, marginTop: 1 }}>
      <Typography variant="subtitle1">{title}</Typography>

      <StyledIconButton
        selected={selected === "open"}
        onClick={() => {
          setSelected("open");
          setFieldValue("situation", "open");
        }}
        color="info"
        icon={<AddCircle />}
      />
      <StyledIconButton
        selected={selected === "on-progress"}
        onClick={() => {
          setSelected("on-progress");
          setFieldValue("situation", "on-progress");
        }}
        color="warning"
        icon={<AccessTime />}
      />
      <StyledIconButton
        selected={selected === "completed"}
        onClick={() => {
          setSelected("completed");
          setFieldValue("situation", "completed");
        }}
        color="success"
        icon={<Check />}
      />
      <StyledIconButton
        selected={selected === "closed"}
        onClick={() => {
          setSelected("closed");
          setFieldValue("situation", "closed");
        }}
        color="error"
        icon={<Close />}
      />
    </Paper>
  );
};

export default ChangeSituation;
