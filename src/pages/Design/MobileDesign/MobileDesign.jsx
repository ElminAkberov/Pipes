import React, { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import moreInfo from "../../../assets/icon/moredetails.svg";
import { Context } from "../../../context/ContextProvider";
import demoSpin from "../../../assets/icon/demospin.svg";
import Template from "../../../assets/icon/generateBg.svg";
import magicStick from "../../../assets/icon/magicStick.svg";
const MobileDesign = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const [step, setStep] = React.useState(0);
  return (
    <menu className="bg-white absolute w-full min-h-screen z-[999] top-0 left-0 flex flex-col md:hidden">
      <div className="justify-center flex items-center p-4 relative">
        <NavLink
          to={"/chat?activeNav=design"}
          className="absolute left-2 text-[20px] cursor-pointer"
        >
          <IoMdArrowBack
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </NavLink>
        <h3 className="text-[18px] satoshi_bold">UI/UX Design</h3>
      </div>
      <div className="bg-[#EDF3FE] flex-1 flex items-center justify-center px-4">
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
            <div className="text-center max-w-[470px] p-[40px] rounded-2xl bg-white shadow-[0px_4px_14px_0px_#00000024] z-30 max-lg:!scale-90">
              <div className="flex justify-center">
                <img src={demoSpin} alt="" className="animate-spin" />
              </div>

              <div className="">
                <h2 className="satoshi_bold text-[#252840CC] text-[18px] my-2">
                  Analyzing Your Project...
                </h2>
                <p className="text-[#252840CC]">
                  We’re processing your input to generate smart recommendations.
                  You’ll receive an email notification once they’re ready!
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </menu>
  );
};

export default MobileDesign;
