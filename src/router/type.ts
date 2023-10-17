//react 路由配置类型
export type RouteConfig = {
  path: string;
  auth : boolean
  component: React.ComponentType;
};
