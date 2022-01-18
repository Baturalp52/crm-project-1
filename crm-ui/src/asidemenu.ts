import { lazy } from "react";
import {
  Dashboard,
  People,
  Apartment,
  ListAlt,
  WorkOutlined,
  EmailRounded,
  MessageRounded,
} from "@mui/icons-material";

type color =
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

const asidemenu = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: Dashboard,
    color: "primary" as color,
    page: lazy(() => import("./Pages/Dashboard")),
  },
  {
    id: 2,
    title: "Candidates",
    path: "/candidates",
    icon: People,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/Candidates")),
  },
  {
    id: 3,
    title: "Companies",
    path: "/companies",
    icon: Apartment,
    color: "info" as color,
    page: lazy(() => import("./Pages/Companies")),
  },
  {
    id: 4,
    title: "Tasks",
    path: "/tasks",
    icon: ListAlt,
    color: "success" as color,
    page: lazy(() => import("./Pages/Tasks")),
  },
  {
    id: 5,
    title: "Jobs",
    path: "/jobs",
    icon: WorkOutlined,
    color: "warning" as color,
    page: lazy(() => import("./Pages/Jobs")),
  },
  {
    id: 6,
    title: "E-Mail Service",
    path: "/e-mail-service",
    icon: EmailRounded,
    color: "primary" as color,
    page: lazy(() => import("./Pages/EMailService")),
  },
  {
    id: 7,
    title: "SMS Service",
    path: "/sms-service",
    icon: MessageRounded,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/SMSService")),
  },
];

export default asidemenu;
