import React from "react";
import demoSpin from "../../../assets/icon/demospin.svg";
import Template from "../../../assets/icon/generateBg.svg";
import moreInfo from "../../../assets/icon/moredetails.svg";
import magicStick from "../../../assets/icon/magicStick.svg";
import Modal from "../../../components/Modal/Modal";
import Trigger from "../../Trigger/Trigger";
const DesktopDesign = () => {
  const [step, setStep] = React.useState(0);
  return (
    <menu className="bg-white max-md:hidden border-[#A8B0D4] border-r border-b px-4 pb-4 rounded-br-2xl flex gap-x-4 pr-[65px] w-full">
      <div className="bg-[#EDF3FE] w-full  min-h-[calc(100vh-var(--header-height))] px-2 rounded-4xl">
        <div className="max-w-[1000px] min-[992px]:mx-auto pt-[40px]">
          <div className="flex items-center justify-center min-h-[calc(100vh-130px)] relative">
            {step == 0 && (
              <Modal
                img={moreInfo}
                header={"More Details Needed"}
                body={
                  "We need additional information to start generating your UX/UI. Please complete the questionnaire, then come back to continue."
                }
                onClick={() => setStep(1)}
                button={"Got it"}
              />
            )}
            {step == 1 && (
              <Modal
                img={magicStick}
                header={" Ready to Generate Your UX/UI"}
                body={
                  "Click below to start generating your UX/UI based on your inputs. This may take a few hours."
                }
                onClick={() => setStep(2)}
                button={"Got it"}
              />
            )}
            {step == 2 && (
              <>
                <img
                  src={Template}
                  alt=""
                  className="absolute z-10 max-h-[calc(100vh-150px)] mx-auto blur-sm"
                />
                <div className="text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
                  <div className="flex justify-center">
                    <img src={demoSpin} alt="" className="animate-spin" />
                  </div>

                  <div className="">
                    <h2 className="font-bold text-[#252840CC] text-[18px] my-2">
                      Generation in Progress....
                    </h2>
                    <p className="text-[#252840CC]">
                      Your UX/UI design is being generated. We’ll notify you via
                      email once it's ready!
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </menu>
  );
};

export default DesktopDesign;
