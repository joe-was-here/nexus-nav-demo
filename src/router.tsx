import ModuleDemo from "nexus-module-demo";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Test from "./Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "module",
        element: <ModuleDemo />,
      },
    ],
  },
]);

export default router;
