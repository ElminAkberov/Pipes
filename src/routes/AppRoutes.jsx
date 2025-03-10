import App from "../App";
import React from "react";
import Login from "../pages/auth/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp/SignUp";

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
    path: "/",
    element: <App />,
    children: [],
  },
]);

export default router;
