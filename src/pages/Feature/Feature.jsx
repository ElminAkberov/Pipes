import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import moreInfo from "../../assets/icon/moredetails.svg";
import Modal from "../../components/Modal/Modal";
import AddFeatures from "../../components/AddFeatures/AddFeatures";
import MobileFeature from "./MobileFeature/MobileFeature";
import DesktopFeature from "./DesktopFeature/DesktopFeature";

const Feature = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileFeature />
      </div>
      <div className="max-md:hidden">
        <DesktopFeature />
      </div>
    </>
  );
};

export default Feature;
