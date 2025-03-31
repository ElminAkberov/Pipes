import React, { useContext, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import barrier from "../../../assets/icon/barrier.svg";
import download from "../../../assets/icon/download.svg";
import { FaAngleDown } from "react-icons/fa";
import { Context } from "../../../context/ContextProvider";
import moreInfo from "../../../assets/icon/moredetails.svg";
import demoSpin from "../../../assets/icon/demospin.svg";
import check from "../../../assets/icon/check.svg";
import { MdClose } from "react-icons/md";

const MobileDocument = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const [step, setStep] = React.useState(0);
  useEffect(() => {
    if (step == 2) {
      setTimeout(() => {
        setStep(3);
      }, 2000);
    }
  }, [step]);
  return (
    <menu className="bg-white absolute w-full   min-h-screen z-[999] top-0 left-0 flex flex-col md:hidden">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat?activeNav=documentation"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </NavLink>
        <h3 className="text-[18px] font-bold">Documentation</h3>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center  flex-col ">
          <div className="flex items-center gap-x-2 cursor-pointer p-2">
            <FaAngleDown color="#515366" />
            <h4 className="font-bold">Planning & Requirements</h4>
          </div>

          <div className="flex items-center justify-start gap-x-2 ml-3 my-2 cursor-pointer text-[18px]">
            <div className="relative ">
              <div
                onClick={() => setStep(1)}
                className="flex items-center gap-x-2 mb-2"
              >
                <img src={download} alt="" />
                <p>Business Requirements Document (BRD)</p>
              </div>
              <div className=" blur-[10px] select-none pointer-events-none relative w-full">
                <div className="">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaAngleDown color="#515366" />
                    <h4 className="text-sm font-bold">
                      Planning & Requirements
                    </h4>
                  </div>
                  <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
                    <img src={download} alt="" />
                    <p>Business Requirements Document (BRD)</p>
                  </div>
                </div>{" "}
                <div className="">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaAngleDown color="#515366" />
                    <h4 className="text-sm font-bold">
                      Planning & Requirements
                    </h4>
                  </div>
                  <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
                    <img src={download} alt="" />
                    <p>Business Requirements Document (BRD)</p>
                  </div>
                </div>{" "}
                <div className="">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaAngleDown color="#515366" />
                    <h4 className="text-sm font-bold">
                      Planning & Requirements
                    </h4>
                  </div>
                  <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
                    <img src={download} alt="" />
                    <p>Business Requirements Document (BRD)</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaAngleDown color="#515366" />
                    <h4 className="text-sm font-bold">
                      Planning & Requirements
                    </h4>
                  </div>
                  <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
                    <img src={download} alt="" />
                    <p>Business Requirements Document (BRD)</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaAngleDown color="#515366" />
                    <h4 className="text-sm font-bold">
                      Planning & Requirements
                    </h4>
                  </div>
                  <div className="flex items-center gap-x-2 ml-3 mt-2 cursor-pointer">
                    <img src={download} alt="" />
                    <p>Business Requirements Document (BRD)</p>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 w-[90%] -translate-y-1/2 text-center">
                <img src={barrier} alt="" className="z-50" />
                <h4 className="text-[#252840CC] font-bold text-[18px]">
                  Coming Soon!{" "}
                </h4>
                <p className="text-[#252840CC]">
                  We're working hard behind the scenes to bring you something
                  amazing. Stay tuned—this page will be live soon! 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {step == 1 && (
        <div className="bg-[#fff] fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-50 px-2">
          <Modal
            img={moreInfo}
            header={"More Details Needed"}
            body={
              "We need additional information to start generating the documentation. Please complete the questionnaire, then return to continue."
            }
            onClick={() => setStep(2)}
            button={"Got it"}
          />
        </div>
      )}
      {step == 2 && (
        <>
          <div className="fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-2 text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
            <div className="flex justify-center">
              <img src={demoSpin} alt="" className="animate-spin" />
            </div>

            <div className="">
              <h2 className="font-bold text-[#252840CC] text-[18px] my-2">
                Generation in Progress....
              </h2>
              <p className="text-[#252840CC]">
                Your document is being processed and will be ready soon. Please
                wait while we complete the generation.
              </p>
            </div>
          </div>
        </>
      )}
      {step == 3 && (
        <div className="fixed bottom-10 w-full left-1/2 -translate-x-1/2 z-50">
          <div
            className={`relative pt-1 max-md:px-3 right-0 top-0 px-2 duration-300`}
          >
            <div className="relative flex items-center max-w-[350px] mx-auto mb-5 border bg-white border-[#00B012] rounded-md">
              <div className="w-[14px] rounded-l-[5px] h-[88px] bg-[#00B012]"></div>
              <div className="relative  mr-[8px] ml-[18px]">
                <img
                  src={check}
                  className=" min-w-[26.67px] min-h-[26.67px] max-w-[26.67px] rounded-full"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-[14px] text-[#484951] font-bold">
                  Document successfully downloaded!
                </p>
              </div>

              <MdClose
                onClick={() => setStep(null)}
                className="absolute top-3 right-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </menu>
  );
};

export default MobileDocument;
