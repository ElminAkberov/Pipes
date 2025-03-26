import React from "react";
import Modal from "../../../components/Modal/Modal";
import moreInfo from "../../../assets/icon/moredetails.svg";
import Trigger from "../../Trigger/Trigger";

const DesktopAiRecommend = () => {
  return (
    <menu className="bg-white border-x border-b border-[#A8B0D4] px-4 pb-4 rounded-b-2xl flex gap-x-4 pr-[65px]">
      <Trigger />
      <div className="bg-[#EDF3FE] w-full  min-h-[calc(100vh-var(--header-height))] px-2 rounded-4xl ">
        <div className="max-w-[1000px] min-[992px]:mx-auto pt-[40px]">
          <div className="flex items-center justify-center min-h-[calc(100vh-130px)]">
            <Modal
              img={moreInfo}
              className={"max-lg:!scale-90"}
              header={"More Details Needed"}
              body={
                "We need additional information to start generating your UX/UI. Please complete the questionnaire, then come back to continue."
              }
              button={"Got it"}
            />
          </div>
        </div>
      </div>
    </menu>
  );
};

export default DesktopAiRecommend;
