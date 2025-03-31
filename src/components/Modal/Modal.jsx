import React from "react";
import Button from "../Button/Button";

const Modal = ({ img, header, body, button, className, onClick }) => {
  return (
    <div
      className={`${className} text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30`}
    >
      <div className="flex justify-center ">
        <img src={img} alt="" />
      </div>
      <div className="">
        <h2 className="font-bold text-[#252840CC] text-[18px] my-2">
          {header}
        </h2>
        <p className="text-[#252840CC]">{body}</p>
        <Button
          onClick={onClick}
          children={button}
          className="w-full button-lg mt-5 active:text-[#6681F4] text-sm py-[13px] rounded-full text-white"
        />
      </div>
    </div>
  );
};

export default Modal;
