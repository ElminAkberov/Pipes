import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import download from "../../assets/icon/download.svg";
import barrier from "../../assets/icon/barrier.svg";
import Modal from "../Modal/Modal";
import demoSpin from "../../assets/icon/demospin.svg";
import Template from "../../assets/icon/generateBg.svg";
import moreInfo from "../../assets/icon/moredetails.svg";
import check from "../../assets/icon/check.svg";
import { MdClose } from "react-icons/md";
const Documentation = () => {
  const [step, setStep] = React.useState(0);
  useEffect(() => {
    if (step == 2) {
      setTimeout(() => {
        setStep(3);
      }, 2000);
    }
  }, [step]);
  return (
    <div className="w-full ">
      <h3 className="text-[18px] satoshi_bold pl-1 mb-2 text-[#252840]">
        Documentation
      </h3>

      <div className="">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <FaAngleDown color="#515366" />
          <h4 className="text-sm satoshi_bold">Planning & Requirements</h4>
        </div>
        <div
          onClick={() => setStep(1)}
          className="flex items-center gap-x-2 ml-3 my-2 cursor-pointer"
        >
          <img src={download} alt="" />
          <p>Business Requirements Document (BRD)</p>
        </div>
      </div>
      <div className="fixed -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-99">
        {step == 1 && (
          <Modal
            img={moreInfo}
            header={"More Details Needed"}
            body={
              "We need additional information to start generating the documentation. Please complete the questionnaire, then return to continue."
            }
            onClick={() => setStep(2)}
            button={"Got it"}
          />
        )}
        {step == 2 && (
          <>
            <div className="text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
              <div className="flex justify-center">
                <img src={demoSpin} alt="" className="animate-spin" />
              </div>

              <div className="">
                <h2 className="satoshi_bold text-[#252840CC] text-[18px] my-2">
                  Generation in Progress....
                </h2>
                <p className="text-[#252840CC]">
                  Your document is being processed and will be ready soon.
                  Please wait while we complete the generation.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {step == 3 && (
        <div className="fixed bottom-10 right-10">
          <div
            className={`w-full relative pt-1 max-md:px-3 right-0 top-0 duration-300`}
          >
            <div className="flex items-center min-w-[350px] mx-auto mb-5 border bg-white border-[#00B012] rounded-md">
              <div className="w-[14px] rounded-l-[5px] h-[88px] bg-[#00B012]"></div>
              <div className="relative  mr-[8px] ml-[18px]">
                <img
                  src={check}
                  className=" min-w-[26.67px] min-h-[26.67px] max-w-[26.67px] rounded-full"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-[14px] text-[#484951] satoshi_bold">
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
      <div className="relative ">
        <div className=" blur-[1px] opacity-25 bg-white select-none pointer-events-none relative w-full">
          <div className="ml-3">
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Software Requirements Specification (SRS)</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>User Stories & Use Cases</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Product Roadmap</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer p-2 text-sm">
            <FaAngleDown color="#515366" />
            <h4 className="satoshi_bold">Architecture</h4>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>System Architecture Document</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Database Design Document</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>API Documentation</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer p-2 text-sm">
            <FaAngleDown color="#515366" />
            <h4 className="satoshi_bold">Development & Implementation</h4>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Technical Specifications Document</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Code Documentation</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Version Control Policy</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer p-2 text-sm">
            <FaAngleDown color="#515366" />
            <h4 className="satoshi_bold">Testing & Quality Assurance</h4>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Test Plan & Test Cases</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Bug Tracking & Issue Logs</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer p-2 text-sm">
            <FaAngleDown color="#515366" />
            <h4 className="satoshi_bold">Deployment & Maintenance</h4>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>Deployment Guide</p>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
              <img src={download} alt="" />
              <p>User Manual</p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center z-50 top-[30%] left-6 -translate-x-0.5 -translate-y-0.5 text-center">
          <img src={barrier} alt="" className="z-50" />
          <h4 className="text-[#252840CC] satoshi_bold text-[18px]">
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
