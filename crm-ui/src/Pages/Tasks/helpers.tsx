import { AccessTime, AddCircle, Check, Close } from "@mui/icons-material";
import { Chip } from "@mui/material";
import i18n from "../../i18n";

export function getChipOfSituation(situation: string) {
  const translatePrefix = "pages:tasks.helpers.chip-text.";
  switch (situation) {
    case "on-progress":
      return (
        <Chip
          icon={<AccessTime />}
          label={i18n.t(translatePrefix + "on-progress")}
          color="warning"
        />
      );
    case "completed":
      return (
        <Chip
          icon={<Check />}
          label={i18n.t(translatePrefix + "completed")}
          color="success"
        />
      );
    case "open":
      return (
        <Chip
          icon={<AddCircle />}
          label={i18n.t(translatePrefix + "open")}
          color="info"
        />
      );
    case "closed":
      return (
        <Chip
          icon={<Close />}
          label={i18n.t(translatePrefix + "closed")}
          color="error"
        />
      );
  }
}
