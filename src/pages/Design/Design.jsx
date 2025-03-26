import React from "react";
import MobileDesign from "./MobileDesign/MobileDesign";
import DesktopDesign from "./DesktopDesign/DesktopDesign";

const Design = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileDesign />
      </div>
      <div className="max-md:hidden">
        <DesktopDesign />
      </div>
    </>
  );
};

export default Design;
