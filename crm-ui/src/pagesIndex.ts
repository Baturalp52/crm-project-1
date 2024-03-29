import { lazy } from "react";
import {
  Dashboard,
  People,
  Apartment,
  ListAlt,
  WorkOutlined,
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
    title: "dashboard",
    type: "user",
    path: "/",
    icon: Dashboard,
    color: "primary" as color,
    page: lazy(() => import("./Pages/Dashboard")),
  },
  {
    id: 2,
    title: "candidates",
    type: "user",
    path: "/candidates",
    icon: People,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/Candidates")),
  },
  {
    id: 3,
    title: "companies",
    type: "user",
    path: "/companies",
    icon: Apartment,
    color: "info" as color,
    page: lazy(() => import("./Pages/Companies")),
  },
  {
    id: 4,
    title: "tasks",
    type: "user",
    path: "/tasks",
    icon: ListAlt,
    color: "success" as color,
    page: lazy(() => import("./Pages/Tasks")),
  },
  {
    id: 5,
    title: "jobs",
    type: "user",
    path: "/jobs",
    icon: WorkOutlined,
    color: "warning" as color,
    page: lazy(() => import("./Pages/Jobs")),
  },
  {
    id: 8,
    title: "calendar",
    type: "user",
    path: "/calendar",
    icon: CalendarToday,
    color: "info" as color,
    page: lazy(() => import("./Pages/Calendar")),
  },
  {
    id: 10,
    title: "hrMembers",
    type: "admin",
    path: "/hr-members",
    icon: PeopleAltRounded,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/HRMembers")),
  },
  {
    id: 11,
    title: "settings",
    type: "admin",
    path: "/settings",
    icon: Settings,
    color: "default" as color,
    page: lazy(() => import("./Pages/Settings")),
  },
];

export default asidemenu;
