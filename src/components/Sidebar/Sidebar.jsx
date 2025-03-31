import React, { useContext, useEffect } from "react";
import ChatTrigger from "../../assets/icon/nav1.svg";
import Design from "../../assets/icon/nav2.svg";
import Documentations from "../../assets/icon/nav3.svg";
import AiReccomend from "../../assets/icon/nav4.svg";
import Dashboard from "../../assets/icon/nav5.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import Features from "../Features/Features";
import Documentation from "../Documentation/Documentation";

const Sidebar = () => {
  const navItems = [
    { name: ChatTrigger, path: "features" },
    { name: Design, path: "design" },
    { name: Documentations, path: "documentation" },
    { name: AiReccomend, path: "recommend" },
    { name: Dashboard, path: "dashboard" },
  ];

  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const activeNavItem = queryParams.get("activeNav");
  useEffect(() => {
    if (activeNavItem) {
      setIsMenuOpen((prev) => ({
        ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
        [activeNavItem]: true,
      }));
    }
  }, [activeNavItem, setIsMenuOpen]);

  const handleNavClick = (itemPath) => {
    queryParams.set("activeNav", itemPath);
    navigate(`${location.pathname}?${queryParams.toString()}`);

    setIsMenuOpen((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [itemPath]: true,
    }));
  };
  return (
    <aside
      className={`bg-white min-h-[calc(100vh-var(--header-height))] ${
        activeNavItem == "features" || activeNavItem == "documentation"
          ? "w-[320px]"
          : "w-[50px]"
      }  fixed top-[60px] right-4 mt-3 flex justify-between max-md:hidden`}
    >
      {activeNavItem == "features" && <Features />}
      {activeNavItem == "documentation" && <Documentation />}
      <div className="flex flex-col gap-y-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavClick(item.path)}
            className={`${
              activeNavItem == item.path ? "bg-[#EDF3FE]" : ""
            } rounded-[12px] min-h-[50px] max-w-[50px] flex justify-center cursor-pointer`}
          >
            <img
              src={item.name}
              alt={`Navigation ${index + 1}`}
              className={`min-w-[18px] max-w-[60px] max-h-[60px] ${
                index > 2 && "scale-125"
              } p-[9px] min-h-[18px]`}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
