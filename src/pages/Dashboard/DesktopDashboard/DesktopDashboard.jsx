import React from "react";
import barrier from "../../../assets/icon/barrier.svg";
import Template from "../../../assets/icon/generateBg.svg";
import Trigger from "../../Trigger/Trigger";
const DesktopDashboard = () => {
  return (
    <menu className="bg-white border-r border-b border-[#A8B0D4] px-4 pb-4 rounded-br-2xl flex gap-x-4 md:pr-[65px] w-full max-md:hidden">
      <div className="bg-[#EDF3FE] w-full  min-h-[calc(100vh-var(--header-height))] px-2 rounded-4xl ">
        <div className=" min-[992px]:mx-auto">
            <h2 className="  font-bold text-[18px] pb-2 px-10 pt-5">Your software insights</h2>
          <div className="flex items-center justify-center min-h-[calc(100vh-140px)] relative">
            <img
              src={Template}
              alt=""
              className="absolute z-10 max-h-[calc(100vh-150px)] mx-auto blur-sm"
            />
            <div className="text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024]  z-30 max-lg:!scale-90">
              <div className="flex justify-center ">
                <img src={barrier} alt="" />
              </div>
              <div className="">
                <h2 className="font-bold text-[#252840CC] text-[18px] my-2">
                  Coming Soon!
                </h2>
                <p className="text-[#252840CC]">
                  We're working hard behind the scenes to bring you something
                  amazing. Stay tuned—this page will be live soon! 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default DesktopDashboard;
