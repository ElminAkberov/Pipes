import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AddFeatures from "../../../components/AddFeatures/AddFeatures";

const MobileFeature = () => {
  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack />
        </NavLink>
        <h3 className="text-[18px] font-bold">Features</h3>
      </div>
      <div className="bg-[#EDF3FE] ">
        <AddFeatures />
      </div>
    </menu>
  );
};

export default MobileFeature;
