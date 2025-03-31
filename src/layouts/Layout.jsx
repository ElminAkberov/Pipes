import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../assets/fonts/Satoshi-Regular.otf";
import { auth } from "../services/firebase/firebaseConfig";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Input from "../components/Input/Input";
import ChangePassword from "../pages/auth/ChangePassword/ChangePassword";
import { Context } from "../context/ContextProvider";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { changePassword } = useContext(Context);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="satoshi md:p-2">
        <Header />
        <main>
          <Outlet />
          {pathname !== "/new-chat" && <Sidebar />}
        </main>
        {/* Footer */}
      </div>
      {changePassword && <ChangePassword />}
    </>
  );
};

export default Layout;
