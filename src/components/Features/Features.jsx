import React from "react";
import noFeature from "../../assets/icon/nofeature.svg";

const Features = () => {
  return (
    <div className="w-full ">
      <h3 className="text-[18px] font-bold pl-1">Features</h3>
      <img
        src={noFeature}
        alt="noFeature"
        className="max-w-[58px] mx-auto w-full mt-3"
      />
      <div className="text-center">
        <h5 className="text-[#252840CC] satoshi_bold py-2 text-[18px]">
          No features available yet.{" "}
        </h5>
            <p className="text-[#252840CC]">
          They will appear here once you <br /> complete the questions.
        </p>
        <button className=" hover:text-[#2433A7] active:text-[#666687] duration-300 my-4 text-[#364CEB] cursor-pointer">
          + Add new feature
        </button>
      </div>
    </div>
  );
};

export default Features;
