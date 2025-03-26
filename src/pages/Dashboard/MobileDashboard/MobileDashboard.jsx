import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import barrier from "../../../assets/icon/barrier.svg";

const MobileDashboard = () => {
  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack />
        </NavLink>
        <h3 className="text-[18px] font-bold">Analytics</h3>
      </div>
      <div className="bg-[#EDF3FE] flex-1 flex items-center justify-center px-4">
        <Modal
          img={barrier}
          header={"Coming Soon! "}
          body={
            "We're working hard behind the scenes to bring you something amazing. Stay tuned—this page will be live soon! 😊"
          }
          button={"Got it"}
        />
      </div>
    </menu>
  );
};

export default MobileDashboard;
