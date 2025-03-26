import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import moreInfo from "../../../assets/icon/moredetails.svg";

const MobileDesign = () => {
  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack />
        </NavLink>
        <h3 className="text-[18px] font-bold">UI/UX Design</h3>
      </div>
      <div className="bg-[#EDF3FE] flex-1 flex items-center justify-center px-4">
        <Modal
          img={moreInfo}
          header={"More Details Needed"}
          body={
            "We need additional information to start generating your UX/UI. Please complete the questionnaire, then come back to continue."
          }
          button={"Got it"}
        />
      </div>
    </menu>
  );
};

export default MobileDesign;
