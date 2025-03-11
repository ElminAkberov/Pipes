import "./checkemail.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { auth } from "../../../services/firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import checkEmail from "../../../assets/icon/checkEmail.svg";

const CheckEmail = () => {
  const email = sessionStorage.getItem("resetEmail");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      navigate("/check-email");
    } catch (err) {
      setError("Failed to send reset email. Please check your email address.");
    }
  };
  return (
    <div className="satoshi w-full min-h-screen bg-[#536DFE] flex items-center justify-center p-5 pt-2">
      <div className="bg-[#EDF3FE] rounded-[32px] shadow-lg p-8 px-[70px] max-md:px-[30px] max-md:py-5 w-[575px]">
        <div className="flex justify-center">
          <img src={checkEmail} alt="Logo" className="w-[60px]" />
        </div>

        <h2 className="text-[24px] font-semibold text-center mt-4">
          Check Your Email
        </h2>
        <p className="text-[#666687] text-center text-[15px]">
          We've sent a password reset link to{" "}
          <span className="font-bold">{sessionStorage.getItem("resetEmail")}</span>. Please check your
          inbox and follow the instructions.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <Button
            children={"Resend password"}
            type="submit"
            className="w-full button-lg active:text-[#6681F4] text-sm py-[15px] rounded-full text-white"
          />
        </form>

        <div className="text-center hover:text-[#2433A7] active:text-[#666687] duration-300 my-4 text-[#364CEB]">
          <NavLink to={"/"}>Back to log in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
