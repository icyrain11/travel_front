import { lazy } from "react";
import Index from "../pages/Index";
import Login from "../pages/Login";
import { RouteConfig } from "./type";

const routes: RouteConfig[] = [
  {
    path: "/",
    auth: false,  
    component: Index,
  },
  {
    path: `/panorama/:id`,
    auth: false,
    component: lazy(() => import("../pages/Panorama")),
  },
  {
    path: "/login",
    auth: false,
    component: Login,
  },
  {
    path: "/scenery",
    auth: false,
    component: lazy(() => import("../pages/Scenery")),
  },
  {
    path: "*",
    auth: false,
    component: lazy(() => import("../pages/NotFound")),
  },
];

export default routes;
