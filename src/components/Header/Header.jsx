import React, { useContext, useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo/logo.svg";
import AiStar from "../../assets/icon/AiStar.svg";
import Change from "../../assets/icon/change.svg";
import Logout from "../../assets/icon/logout.svg";
import Account from "../../assets/icon/account.svg";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import ChatTrigger from "../../assets/icon/nav1.svg";
import Design from "../../assets/icon/nav2.svg";
import Documentations from "../../assets/icon/nav3.svg";
import AiReccomend from "../../assets/icon/nav4.svg";
import Dashboard from "../../assets/icon/nav5.svg";
import { Context } from "../../context/ContextProvider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isMenuOpen, setIsMenuOpen, changePassword, setChangePassword } =
    useContext(Context);

  const navItems = [
    { name: ChatTrigger, path: "features", title: "Features" },
    { name: Design, path: "design", title: "UX/UI Design" },
    { name: Documentations, path: "documentation", title: "Documentation" },
    { name: AiReccomend, path: "recommend", title: "AI Recommendations" },
    { name: Dashboard, path: "dashboard", title: "Analytics" },
  ];

  const queryParams = new URLSearchParams(location.search);
  const activeNavItem = queryParams.get("activeNav");

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <header className="bg-white md:border-x md:border-t border-[#A8B0D4] p-2 md:rounded-t-2xl ">
      <nav className="flex justify-between px-2 w-full">
        <div className="flex max-md:justify-between max-md:w-full items-center">
          <NavLink to={"/new-chat"}>
            <img src={Logo} alt="logo" className="max-w-[25px]" />
          </NavLink>
          <div
            onClick={() => setNavBar(!navBar)}
            className="flex items-center gap-x-1 ml-5"
          >
            {location.pathname !== "/new-chat" && (
              <>
                <img src={AiStar} alt="star" />
                <h3 className="font-bold">AI Assistant</h3>
                <FaAngleDown color="#000" className="md:hidden" />
              </>
            )}
            <div
              className={`${
                navBar ? "opacity-100" : "opacity-0 invisible"
              } absolute -translate-x-1/2 left-1/2 top-16 md:hidden duration-300 z-40 bg-white shadow-[0px_4px_14px_0px_#00000024] w-[275px] p-2 rounded-[8px]`}
            >
              {navItems.map((item, index) => (
                <div key={index} onClick={() => handleNavClick(item.path)}>
                  <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
                    <img
                      src={item.name}
                      className={`${index > 2 && "scale-150"} max-w-[20px]`}
                      alt=""
                    />{" "}
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
            <img src={Account} alt="" />
          </div>
        </div>
        <div
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
          className="satoshi_bold flex max-md:hidden items-center text-[15px] gap-x-2 font-[900] text-[#515366] border-[2px] border-[#515366] rounded-full p-1 px-3 cursor-pointer"
        >
          {localStorage.getItem("user")}
          <IoIosArrowDown
            color="#515366"
            strokeWidth={4}
            className={`${showMenu && "rotate-180"} duration-300`}
          />
        </div>

        <div
          className={`${
            showMenu ? "opacity-100" : "opacity-0 invisible"
          } absolute right-3 top-16 duration-300 z-40 bg-white shadow-[0px_4px_14px_0px_#00000024] min-w-[300px] max-md:min-w-[200px] p-2 rounded-[8px]`}
        >
          <div
            onClick={() => {
              setChangePassword(!changePassword);
            }}
            className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2"
          >
            <img src={Change} alt="" /> Change password
          </div>
          <NavLink to={"/"} onClick={() => localStorage.removeItem("user")}>
            <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
              <img src={Logout} alt="" /> Log out
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
