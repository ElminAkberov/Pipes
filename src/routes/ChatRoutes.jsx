import React from "react";
import Chat from "../pages/Chat/Chat";
import Trigger from "../pages/Trigger/Trigger";
import Design from "../pages/Design/Design";
import Document from "../pages/Document/Document";
import AiRecommend from "../pages/AiRecommend/AiRecommend";
import Feature from "../pages/Feature/Feature";
import Dashboard from "../pages/Dashboard/Dashboard";

const ChatRoutes = [
  {
    path: "/new-chat",
    element: <Chat />,
  },
  {
    path: "/chat",
    element: <Trigger />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/documentation",
    element: <Document />,
  },
  {
    path: "/reccomend",
    element: <AiRecommend />,
  },
  {
    path: "/features",
    element: <Feature />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default ChatRoutes;
