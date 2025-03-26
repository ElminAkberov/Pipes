import React from "react";
import { FaAngleDown } from "react-icons/fa";
import download from '../../assets/icon/download.svg';
import barrier from "../../assets/icon/barrier.svg";

const Documentation = () => {
  return (
    <div className="w-full ">
      <h3 className="text-[18px] font-bold pl-1 mb-2 text-[#252840]">
        Documentation
      </h3>

      <div className="">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <FaAngleDown color="#515366" />
          <h4 className="text-sm font-bold">Planning & Requirements</h4>
        </div>
        <div className="flex items-center gap-x-2 ml-3 my-2 cursor-pointer">
          <img src={download} alt="" />
          <p>Business Requirements Document (BRD)</p>
        </div>
      </div>

      <div className="relative ">
        <div className=" blur-[10px] select-none pointer-events-none relative">
          <div className="">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaAngleDown color="#515366" />
              <h4 className="text-sm font-bold">Planning & Requirements</h4>
            </div>
            <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
              <img src={download} alt="" />
              <p>Business Requirements Document (BRD)</p>
            </div>
          </div>{" "}
          <div className="">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaAngleDown color="#515366" />
              <h4 className="text-sm font-bold">Planning & Requirements</h4>
            </div>
            <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
              <img src={download} alt="" />
              <p>Business Requirements Document (BRD)</p>
            </div>
          </div>{" "}
          <div className="">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaAngleDown color="#515366" />
              <h4 className="text-sm font-bold">Planning & Requirements</h4>
            </div>
            <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
              <img src={download} alt="" />
              <p>Business Requirements Document (BRD)</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaAngleDown color="#515366" />
              <h4 className="text-sm font-bold">Planning & Requirements</h4>
            </div>
            <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
              <img src={download} alt="" />
              <p>Business Requirements Document (BRD)</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaAngleDown color="#515366" />
              <h4 className="text-sm font-bold">Planning & Requirements</h4>
            </div>
            <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
              <img src={download} alt="" />
              <p>Business Requirements Document (BRD)</p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center z-50 top-1/2 left-6 -translate-x-0.5 -translate-y-0.5 text-center">
          <img src={barrier} alt="" className="z-50" />
          <h4 className="text-[#252840CC] font-bold text-[18px]">
            Coming Soon!{" "}
          </h4>
          <p className="text-[#252840CC]">
            We're working hard behind the scenes to bring you something amazing.
            Stay tuned—this page will be live soon! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
