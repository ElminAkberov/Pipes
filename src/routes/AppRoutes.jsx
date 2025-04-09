import App from "../App";
import React from "react";
import Login from "../pages/auth/Login/Login";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SignUp from "../pages/auth/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import CheckEmail from "../pages/auth/CheckEmail/CheckEmail";
import ChatRoutes from "./ChatRoutes";
import ChangePassword from "../pages/auth/ChangePassword/ChangePassword";

const isLoggedIn = localStorage.getItem("user");

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn ? <Navigate to="/new-chat" /> : <Login />,
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
    path: "/change-password",
    element: <ChangePassword />,
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
