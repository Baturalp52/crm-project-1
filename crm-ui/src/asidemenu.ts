import { lazy } from "react";
import {
  Dashboard,
  People,
  Apartment,
  ListAlt,
  WorkOutlined,
  EmailRounded,
  MessageRounded,
  CalendarToday,
  PeopleAltRounded,
  Settings,
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
    type: "user",
    path: "/",
    icon: Dashboard,
    color: "primary" as color,
    page: lazy(() => import("./Pages/Dashboard")),
  },
  {
    id: 2,
    title: "Candidates",
    type: "user",
    path: "/candidates",
    icon: People,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/Candidates")),
  },
  {
    id: 3,
    title: "Companies",
    type: "user",
    path: "/companies",
    icon: Apartment,
    color: "info" as color,
    page: lazy(() => import("./Pages/Companies")),
  },
  {
    id: 4,
    title: "Tasks",
    type: "user",
    path: "/tasks",
    icon: ListAlt,
    color: "success" as color,
    page: lazy(() => import("./Pages/Tasks")),
  },
  {
    id: 5,
    title: "Jobs",
    type: "user",
    path: "/jobs",
    icon: WorkOutlined,
    color: "warning" as color,
    page: lazy(() => import("./Pages/Jobs")),
  },
  {
    id: 6,
    title: "E-Mail Service",
    type: "user",
    path: "/e-mail-service",
    icon: EmailRounded,
    color: "primary" as color,
    page: lazy(() => import("./Pages/EMailService")),
  },
  {
    id: 7,
    title: "SMS Service",
    type: "user",
    path: "/sms-service",
    icon: MessageRounded,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/SMSService")),
  },
  {
    id: 8,
    title: "Calendar",
    type: "user",
    path: "/calendar",
    icon: CalendarToday,
    color: "info" as color,
    page: lazy(() => import("./Pages/Calendar")),
  },
  {
    id: 9,
    title: "HR Members",
    type: "admin",
    path: "/hr-members",
    icon: PeopleAltRounded,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/HRMembers")),
  },
  {
    id: 10,
    title: "Settings",
    type: "admin",
    path: "/settings",
    icon: Settings,
    color: "default" as color,
    page: lazy(() => import("./Pages/Settings")),
  },
];

export default asidemenu;
