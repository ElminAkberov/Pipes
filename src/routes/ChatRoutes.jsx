import React from "react";
import Chat from "../pages/Chat/Chat";
import MainMenu from "../pages/MainMenu/MainMenu";

const ChatRoutes = [
  {
    path: "/new-chat",
    element: <Chat />,
  },
  {
    path: "/chat",
    element: <MainMenu />,
  },
];

export default ChatRoutes;
