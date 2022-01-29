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
  Person,
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
    id: 6,
    title: "emailService",
    type: "user",
    path: "/e-mail-service",
    icon: EmailRounded,
    color: "primary" as color,
    page: lazy(() => import("./Pages/EMailService")),
  },
  {
    id: 7,
    title: "smsService",
    type: "user",
    path: "/sms-service",
    icon: MessageRounded,
    color: "secondary" as color,
    page: lazy(() => import("./Pages/SMSService")),
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
    id: 9,
    title: "profile",
    type: "tool-bar",
    path: "/profile",
    icon: Person,
    color: "default" as color,
    page: lazy(() => import("./Pages/Profile")),
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
  {
    id: 12,
    title: "search",
    type: "user",
    path: "/search",
    icon: Settings,
    color: "default" as color,
    page: lazy(() => import("./Pages/Search")),
  },
];

export default asidemenu;
