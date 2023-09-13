import { lazy } from "react";
import Index from "../pages/Index";

//react 路由配置类型
export type RouteConfig = {
  path: string;
  component: React.ComponentType;
};

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
  },
];

export default routes;
