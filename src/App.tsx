import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes, { RouteConfig } from "./router";
function App() {
  return (
    <Routes>
      {routes.map((route: RouteConfig, index: number) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default App;
