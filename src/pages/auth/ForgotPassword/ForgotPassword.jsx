import "./forgotpassword.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { auth } from "../../../services/firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      sessionStorage.setItem("resetEmail", email);
      navigate("/check-email");
    } catch (err) {
      setError("Failed to send reset email. Please check your email address.");
    }
  };

  return (
    <div className="satoshi w-full min-h-screen bg-[#536DFE] flex items-center justify-center p-5 pt-2">
      <div className="bg-[#EDF3FE] rounded-[32px] shadow-lg p-8 px-[70px] max-md:px-[30px] max-md:py-5 w-[575px]">
        <h2 className="text-[24px] font-semibold text-center mt-4">
          Forgot Your Password?
        </h2>
        <p className="text-[#666687] text-center text-[15px]">
          No worries! Enter your email below, and we’ll send <br /> you a link
          to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Button
            children={"Reset Password"}
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

export default ForgotPassword;
