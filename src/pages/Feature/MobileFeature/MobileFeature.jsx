import React, { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Features from "../../../components/Features/Features";
import { Context } from "../../../context/ContextProvider";
import addFeature from "../../../assets/icon/addFeature.svg";
import AddFeatures from "../../../components/AddFeatures/AddFeatures";

const MobileFeature = () => {
  const { setIsMenuOpen, addNewFeature, setAddNewFeature } =
    useContext(Context);

  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col md:hidden">
      <div
        className={`justify-between flex items-center p-4 relative ${
          addNewFeature && "hidden"
        }`}
      >
        <div className={``}>
          <NavLink
            to={"/chat?activeNav=features"}
            className="text-[20px] cursor-pointer"
          >
            <IoMdArrowBack
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          </NavLink>
        </div>
        <h3 className="text-[18px] font-bold">Features</h3>
        <img
          onClick={() => setAddNewFeature(!addNewFeature)}
          src={addFeature}
          className="min-w-[20px]"
          alt=""
        />
      </div>
      <div className=" ">{addNewFeature ? <AddFeatures /> : <Features />}</div>
    </menu>
  );
};

export default MobileFeature;
