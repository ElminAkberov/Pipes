import React, { useContext } from "react";
import Trigger from "../Trigger/Trigger";
import DesktopDesign from "../Design/DesktopDesign/DesktopDesign";
import { Context } from "../../context/ContextProvider";
import DesktopAiRecommend from "../AiRecommend/DesktopAiRecommend/DesktopAiRecommend";
import DesktopDashboard from "../Dashboard/DesktopDashboard/DesktopDashboard";
import DesktopDocument from "../Document/DesktopDocument/DesktopDocument";

const MainMenu = () => {
  const { isMenuOpen } = useContext(Context);
  const queryParams = new URLSearchParams(location.search);
  const activeNavItem = queryParams.get("activeNav");

  return (
    <div className="flex w-full max-md:justify-center">
      <Trigger />
      {isMenuOpen["documentation"] && <DesktopDocument />}
      {isMenuOpen["design"] && <DesktopDesign />}
      {isMenuOpen["recommend"] && <DesktopAiRecommend />}
      {isMenuOpen["dashboard"] && <DesktopDashboard />}
    </div>
  );
};

export default MainMenu;
