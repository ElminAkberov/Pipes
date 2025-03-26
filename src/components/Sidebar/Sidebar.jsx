import React from "react";
import ChatTrigger from "../../assets/icon/nav1.svg";
import Design from "../../assets/icon/nav2.svg";
import Documentations from "../../assets/icon/nav3.svg";
import AiReccomend from "../../assets/icon/nav4.svg";
import Dashboard from "../../assets/icon/nav5.svg";
import Documentation from "../Documentation/Documentation";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  const navItems = [
    { name: ChatTrigger, path: "/features" },
    { name: Design, path: "/design" },
    { name: Documentations, path: "/documentation" },
    { name: AiReccomend, path: "/reccomend" },
    { name: Dashboard, path: "/dashboard" },
  ];
  const location = useLocation();
  return (
    <aside className="bg-white min-h-[calc(100vh-var(--header-height))] w-[50px] fixed top-[60px]  right-4 mt-3 flex justify-between max-md:hidden">
      {/* <AddFeatures /> */}
      {/* <Features /> */}
      {/* <Documentation /> */}
      <div className="flex flex-col gap-y-1">
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`${
              location.pathname == item.path && "bg-[#EDF3FE]"
            }  rounded-[12px] min-h-[50px] max-w-[50px] flex justify-center  cursor-pointer`}
          >
            <img
              src={item.name}
              alt={`Navigation ${index + 1}`}
              className={`min-w-[18px] p-[9px] ${
                index > 2 && "scale-125"
              }  min-h-[18px]`}
            />
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
