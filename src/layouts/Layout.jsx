import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../assets/fonts/Satoshi-Regular.otf";
import { auth } from "../services/firebase/firebaseConfig";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="satoshi ">
      {/* Header */}
      <section>
        <Outlet />
      </section>
      {/* Footer */}
    </div>
  );
};

export default Layout;
