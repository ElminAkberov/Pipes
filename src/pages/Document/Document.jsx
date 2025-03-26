import React from "react";
import { BsThreeDots } from "react-icons/bs";
import AiStar from "../../assets/icon/AiStar.svg";
import styles from "./Document.module.css";
import { SyncLoader } from "react-spinners";
import Modal from "../../components/Modal/Modal";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import MobileDocument from "./MobileDocument/MobileDocument";
import DesktopDocument from "./DesktopDocument/DesktopDocument";
const Document = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileDocument />
      </div>
      <div className="max-md:hidden">
        <DesktopDocument />
      </div>
    </>
  );
};

export default Document;
