import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import moreInfo from "../../../assets/icon/moredetails.svg";
import download from "../../../assets/icon/download.svg";
import { FaAngleDown } from "react-icons/fa";
const MobileDocument = () => {
  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack />
        </NavLink>
        <h3 className="text-[18px] font-bold">Documentation</h3>
      </div>
      <div className="">
        <div className="flex items-center gap-x-2 cursor-pointer p-2">
          <FaAngleDown color="#515366" />
          <h4 className=" font-bold">Planning & Requirements</h4>
        </div>
        <div className="flex items-center gap-x-2 ml-3 my-2 cursor-pointer text-[18px]">
          <img src={download} alt="" />
          <p >Business Requirements Document (BRD)</p>
        </div>
      </div>
      <div className="bg-[#fff]  flex justify-center px-4">
        <Modal
          img={moreInfo}
          header={"Not Enough Information"}
          body={
            "To generate accurate AI recommendations, we need a bit more details from you. Please complete the questionnaire and return to continue."
          }
          button={"Got it"}
        />
      </div>
    </menu>
  );
};

export default MobileDocument;
