import App from "../App";
import React from "react";
import Login from "../pages/auth/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import CheckEmail from "../pages/auth/CheckEmail/CheckEmail";
import ChatRoutes from "./ChatRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      ...ChatRoutes,
    ],
  },
]);

export default router;
