import { AccessTime, AddCircle, Check, Close } from "@mui/icons-material";
import { Chip } from "@mui/material";

export function getChipOfSituation(situation: string) {
  switch (situation) {
    case "on-progress":
      return <Chip icon={<AccessTime />} label="On Progress" color="warning" />;
    case "completed":
      return <Chip icon={<Check />} label="Completed" color="success" />;
    case "open":
      return <Chip icon={<AddCircle />} label="Open" color="info" />;
    case "closed":
      return <Chip icon={<Close />} label="Closed" color="error" />;
  }
}
