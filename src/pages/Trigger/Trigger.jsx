import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import AiStar from "../../assets/icon/AiStar.svg";
import styles from "./Trigger.module.css";
import { SyncLoader } from "react-spinners";
import Manage from "../../assets/icon/nav1.svg";
import Design from "../../assets/icon/nav2.svg";
import Restart from "../../assets/icon/restart.svg";
import { Context } from "../../context/ContextProvider";
import { NavLink, useLocation } from "react-router-dom";
import MobileTrigger from "./MobileTrigger";
import { useDispatch, useSelector } from "react-redux";
import { addPrompt } from "../../services/slices/promptSlice";
import Modal from "../../components/Modal/Modal";

const Trigger = () => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const { isMenuOpen } = useContext(Context);
  const queryParams = new URLSearchParams(location.search);
  const activeNavItem = queryParams.get("activeNav");
  useEffect(() => {
    setShowActionMenu(false);
  }, [isMenuOpen]);
  return (
    <menu
      className={`bg-white ${
        activeNavItem == "design" ||
        activeNavItem == "recommend" ||
        activeNavItem == "dashboard"
          ? "max-w-[500px] md:border-l  rounded-bl-2xl md:pl-4"
          : `w-full md:border-x rounded-b-2xl md:pl-4 md:pb-4 ${
              activeNavItem == "features" || activeNavItem == "documentation"
                ? "md:pr-[360px]"
                : "md:pr-[65px]"
            } `
      } border-[#A8B0D4] w-full  md:border-b `}
    >
      <div
        className={`bg-[#EDF3FE]  md:min-h-[calc(100vh-var(--header-height))] md:px-2 md:rounded-4xl ${
          activeNavItem !== "design" ||
          activeNavItem !== "recommend" ||
          activeNavItem !== "dashboard"
            ? "md:relative"
            : "relative"
        }`}
      >
        <div className="max-w-[1000px] min-[992px]:mx-auto pt-[40px] ">
          <div className="min-[992px]:max-w-[600px] min-[992px]:mx-auto flex justify-center   ">
            <div className=" w-full flex justify-center   ">
              <div
                className={`${
                  showActionMenu ? "opacity-100" : "opacity-0 invisible"
                } absolute bottom-14  duration-300 z-40  w-full max-w-[500px] p-3   `}
              >
                <div className="bg-white shadow-[0px_4px_14px_0px_#00000024] p-2 rounded-[8px]">
                  <NavLink
                    to={"/chat?activeNav=features"}
                    className="flex items-center gap-x-2  hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2"
                  >
                    <img src={Manage} alt="" /> Manage features
                  </NavLink>
                  <NavLink
                    to={"/chat?activeNav=design"}
                    className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2"
                  >
                    <img src={Design} alt="" /> Generate UX/UI Design
                  </NavLink>
                  <NavLink to={"/new-chat"}>
                    <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
                      <img src={Restart} alt="" /> Start over
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 w-full max-w-[500px] px-4">
              <div className="relative w-full">
                <div
                  onClick={() => setShowActionMenu(!showActionMenu)}
                  className={`${styles.bg_linear} absolute left-4 top-1/2 -translate-y-1/2 min-w-[20px] min-h-[20px] flex justify-center items-center rounded-full cursor-pointer`}
                >
                  <BsThreeDots color="white" />
                </div>
                <input
                  name="action"
                  placeholder="Click to select action"
                  className="resize-none bg-white w-full border pl-11 pr-3 py-2 border-white focus:border-[#2D54DD] outline-none rounded-[80px] placeholder:text-[14px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-2 px-4">
            <div className="bg-white  max-w-[500px] p-4 rounded-t-2xl rounded-bl-2xl  ">
              <h3 className="satoshi_bold">Victoria</h3>
              <p className="text-[#252840CC]">
                I want to create an app that helps users find nearby fitness
                classes and book them directly. It should allow for class
                scheduling, payments, and personalized recommendations.
              </p>
            </div>
          </div>
          <div className="flex justify-start px-4">
            <div className="bg-[#D9E4FD] w-full max-w-[300px]  p-4 rounded-t-2xl rounded-bl-2xl">
              <div className="flex items-center gap-x-1">
                <img src={AiStar} alt="star" />
                <h3 className="satoshi_bold">AI Assistant</h3>
              </div>
              <p className="text-[#252840CC]">
                <SyncLoader size={5} speedMultiplier={0.5} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MobileTrigger />
      </div>
    </menu>
  );
};

export default Trigger;
