import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextProvider";
import MobileFeature from "../Feature/MobileFeature/MobileFeature";
import MobileDesign from "../Design/MobileDesign/MobileDesign";
import MobileDocument from "../Document/MobileDocument/MobileDocument";
import MobileAiRecommend from "../AiRecommend/MobileAiRecommend/MobileAiRecommend";
import MobileDashboard from "../Dashboard/MobileDashboard/MobileDashboard";

const MobileTrigger = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const queryParams = new URLSearchParams(location.search);
  const activeNavItem = queryParams.get("activeNav");

  useEffect(() => {
    if (activeNavItem) {
      setIsMenuOpen((prev) => ({
        ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
        [activeNavItem]: true, 
      }));
    }
  }, [activeNavItem, setIsMenuOpen]);

  return (
    <>
      {isMenuOpen["features"] && <MobileFeature />}
      {isMenuOpen["design"] && <MobileDesign />}
      {isMenuOpen["documentation"] && <MobileDocument />}
      {isMenuOpen["recommend"] && <MobileAiRecommend />}
      {isMenuOpen["dashboard"] && <MobileDashboard />}
    </>
  );
};

export default MobileTrigger;
