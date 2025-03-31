import React from "react";
import Modal from "../../../components/Modal/Modal";
import moreInfo from "../../../assets/icon/moredetails.svg";
import magicStick from "../../../assets/icon/magicStick.svg";
import demoSpin from "../../../assets/icon/demoSpin.svg";
import Trigger from "../../Trigger/Trigger";

const DesktopAiRecommend = () => {
  const [step, setStep] = React.useState(0);

  return (
    <menu className="bg-white  border-[#A8B0D4]  border-r border-b px-4 pb-4 rounded-br-2xl flex gap-x-4 pr-[65px] w-full max-md:hidden">
      <div className="bg-[#EDF3FE] w-full  min-h-[calc(100vh-var(--header-height))] px-2 rounded-4xl ">
        <div className="max-w-[1000px] min-[992px]:mx-auto pt-[40px]">
          <div className="flex items-center justify-center min-h-[calc(100vh-130px)]">
            {step == 0 && (
              <Modal
                img={moreInfo}
                className={"max-lg:!scale-90"}
                header={"Not Enough Information"}
                body={
                  "To generate accurate AI recommendations, we need a bit more details from you. Please complete the questionnaire and return to continue."
                }
                onClick={() => setStep(1)}
                button={"Got it"}
              />
            )}
            {step == 1 && (
              <Modal
                img={magicStick}
                className={"max-lg:!scale-90"}
                header={"Get AI-Powered Insights"}
                body={
                  "Click below to generate AI recommendations tailored to your needs. This process may take a few hours."
                }
                onClick={() => setStep(2)}
                button={"Got it"}
              />
            )}
            {step == 2 && (
              <div className="text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
                <div className="flex justify-center">
                  <img src={demoSpin} alt="" className="animate-spin" />
                </div>

                <div className="">
                  <h2 className="font-bold text-[#252840CC] text-[18px] my-2">
                    Analyzing Your Project...
                  </h2>
                  <p className="text-[#252840CC]">
                    We’re processing your input to generate smart
                    recommendations. You’ll receive an email notification once
                    they’re ready!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </menu>
  );
};

export default DesktopAiRecommend;
