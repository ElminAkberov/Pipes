import React from "react";
import MobileAiRecommend from "./MobileAiRecommend/MobileAiRecommend";
import DesktopAiRecommend from "./DesktopAiRecommend/DesktopAiRecommend";

const AiRecommend = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileAiRecommend />
      </div>
      <div className="max-md:hidden">
        <DesktopAiRecommend />
      </div>
    </>
  );
};

export default AiRecommend;
