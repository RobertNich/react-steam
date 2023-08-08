import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { lazy } from "react";

const Store = lazy(() => import("../pages/store/Store"));

export const router = createBrowserRouter([
  { path: "*", element: <Navigate replace to="app/home" /> },
  {
    path: "app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Store />,
      },
    ],
  },
]);
