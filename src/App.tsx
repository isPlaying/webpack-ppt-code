import { ChangeEvent, useState } from "react";
import styles from "./index.module.less";
import { RouteObject, useRoutes } from "react-router-dom";

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "*",
    element: <>404 Not Found!</>,
  },
];
const App = () => {
  return useRoutes(ROUTER_CONFIG);
};
export default App;
