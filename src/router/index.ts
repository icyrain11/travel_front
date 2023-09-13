import { lazy } from "react";
import Index from "../pages/Index";
import { RouteConfig } from "./type";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/panorama",
    component: lazy(() => import("../pages/Panorama")),
  },
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
  },
];

export default routes;
