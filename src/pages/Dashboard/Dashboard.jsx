import React from "react";
import MobileDashboard from "./MobileDashboard/MobileDashboard";
import DesktopDashboard from "./DesktopDashboard/DesktopDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileDashboard />
      </div>
      <div className="max-md:hidden">
        <DesktopDashboard />
      </div>
    </>
  );
};

export default Dashboard;
