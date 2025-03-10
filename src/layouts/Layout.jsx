import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/fonts/Satoshi-Regular.otf";

const Layout = () => {
  return (
    <div className="satoshi ">
      Header
      <section>
        <Outlet />
      </section>
      Footer
    </div>
  );
};

export default Layout;
