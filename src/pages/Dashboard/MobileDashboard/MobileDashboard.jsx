import React, { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import barrier from "../../../assets/icon/barrier.svg";
import { Context } from "../../../context/ContextProvider";
import Template from "../../../assets/icon/Template3.png";

const MobileDashboard = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col md:hidden">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat?activeNav=dashboard"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </NavLink>
        <h3 className="text-[18px] satoshi_bold">Analytics</h3>
      </div>

      <div className="relative">
        <h2 className="bg-[#EDF3FE] z-[99] p-3 satoshi_bold relative text-[18px] ">
          Your software insights
        </h2>
        <img
          src={Template}
          alt=""
          className="fixed w-full p-[10px] rounded-xl h-full object-cover "
        />
      </div>

      <div className="bg-[#EDF3FE] flex items-center justify-center flex-1 ">
        <div className="text-center max-w-[470px]  p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
          <div className="flex justify-center ">
            <img src={barrier} alt="" />
          </div>
          <div className="">
            <h2 className="satoshi_bold text-[#252840CC] text-[18px] my-2">
              Coming Soon!
            </h2>
            <p className="text-[#252840CC]">
              We're working hard behind the scenes to bring you something
              amazing. Stay tuned—this page will be live soon! 😊
            </p>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default MobileDashboard;
