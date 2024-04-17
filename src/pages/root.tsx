import { lazy } from "react";
import { Home } from "@/pages/home";

// imports from "@/pages/";
const Inventory = lazy(() => import("@/pages/inventory"));
const Reports = lazy(() => import("@/pages/reports"));
const Clients = lazy(() => import("@/pages/clients"));
const Sales = lazy(() => import("@/pages/sales"));
const UserManager = lazy(() => import("@/pages/user-management"));
const Login = lazy(() => import("@/pages/login"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/user-management",
    element: (
      <UserManager />
    )
  },
  {
    path: "/login",
    element: <Login />,
  },
];
