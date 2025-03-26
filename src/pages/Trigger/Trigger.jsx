import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import AiStar from "../../assets/icon/AiStar.svg";
import styles from "./Trigger.module.css";
import { SyncLoader } from "react-spinners";
import Manage from "../../assets/icon/nav1.svg";
import Design from "../../assets/icon/nav2.svg";
import Restart from "../../assets/icon/restart.svg";
import { Context } from "../../context/ContextProvider";
import { useLocation } from "react-router-dom";

const Trigger = () => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const adjustForKeyboard = () => {
      const inputElement = document.querySelector("input[name='action']");
      if (inputElement) {
        inputElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("resize", adjustForKeyboard);

    return () => {
      window.removeEventListener("resize", adjustForKeyboard);
    };
  }, []);
  return (
    <menu
      className={`bg-white  ${
        pathname == "/documentation" || pathname == "/features"|| pathname == "/chat"
          ? "md:border-x md:border-b md:pl-4 md:pb-4 md:pr-[65px]"
          : "max-w-[500px]"
      } border-[#A8B0D4]  rounded-b-2xl w-full `}
    >
      <div
        className={`bg-[#EDF3FE]  min-h-[calc(100vh-var(--header-height))] md:px-2 md:rounded-4xl ${
          pathname === "/trigger" || pathname === "/documentation" || pathname == "/chat"
            ? "md:relative"
            : "relative"
        }`}
      >
        <div className="max-w-[1000px] min-[992px]:mx-auto pt-[40px] ">
          <div className="min-[992px]:max-w-[600px] min-[992px]:mx-auto flex justify-center   ">
            <div className="bg-white w-full flex justify-center   ">
              <div
                className={`${
                  showActionMenu ? "opacity-100" : "opacity-0 invisible"
                } absolute bottom-14  duration-300 z-40 bg-white shadow-[0px_4px_14px_0px_#00000024] w-full max-w-[500px] max-md:max-w-[400px] p-2 rounded-[8px] `}
              >
                <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
                  <img src={Manage} alt="" /> Manage features
                </div>
                <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
                  <img src={Design} alt="" /> Generate UX/UI Design
                </div>
                <div className="flex items-center gap-x-2 hover:bg-[#EDF3FE] rounded-[4px] cursor-pointer duration-300 p-2">
                  <img src={Restart} alt="" /> Start over
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 w-full max-w-[500px] px-4 up">
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
              <h3 className="font-bold">Victoria</h3>
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
                <h3 className="font-bold">AI Assistant</h3>
              </div>
              <p className="text-[#252840CC]">
                <SyncLoader size={5} speedMultiplier={0.5} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default Trigger;
