import "./signup.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import Input from "../../../components/Input/Input";
import Google from "../../../assets/icon/google.svg";
import Button from "../../../components/Button/Button";
import {
  auth,
  googleProvider,
} from "../../../services/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: { fullName: "", email: "", password: "", confirmPassword: "" },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formState.fullName) {
      newError.fullName = "Full name is required!";
    }
    if (!formState.email) {
      newError.email = "Email is required!";
    }
    if (!formState.password) {
      newError.password = "Password is required!";
    }
    if (formState.password !== formState.confirmPassword) {
      newError.confirmPassword = "Passwords do not match!";
    }

    setFormState((prevState) => ({ ...prevState, error: newError }));

    if (!Object.values(newError).some((err) => err)) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          formState.email,
          formState.password
        );
        localStorage.setItem("user", formState.fullName);
        navigate("/new-chat");
      } catch (error) {
        console.error("Signup Error:", error.message);
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login success:", result.user);
      localStorage.setItem(
        "user",
        result.user.displayName || result.user.displayName
      );
      navigate("/new-chat");
    } catch (error) {
      console.error("Google Login Error:", error.code, error.message);
    }
  };

  return (
    <div className="satoshi w-full min-h-screen bg-[#536DFE] flex items-center justify-center px-5 py-2">
      <div className="bg-[#EDF3FE] rounded-[32px] shadow-lg p-8 px-[108px] max-md:px-[30px] max-md:py-5 w-[575px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="w-[60px]" />
        </div>

        <h2 className="text-[24px] satoshi_bold text-center mt-4">
          Create your account!
        </h2>
        <p className="text-[#666687] text-center text-[15px]">
          Already have an account?{" "}
          <NavLink
            to={"/"}
            className="text-[#2D61F0] satoshi_bold hover:text-[#2433A7] active:text-[#666687] duration-300"
          >
            Log in
          </NavLink>
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Full name"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              error={formState.error.fullName}
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              error={formState.error.email}
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              minLength={6}
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              error={formState.error.password}
            />
          </div>
          <div className="mb-[12px]">
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              error={formState.error.confirmPassword}
            />
          </div>
          <p className="text-[#7A8EA4] text-sm  mt-[20px]">
            By signing up, you agree to Pipes’s{" "}
            <NavLink
              to={"https://www.aipipes.app/terms-conditions"}
              target="_blank"
              className="text-[#2D61F0] satoshi_bold hover:text-[#2433A7] active:text-[#666687] duration-300"
            >
              Terms of Service
            </NavLink>{" "}
            and{" "}
            <NavLink
              to={"https://www.aipipes.app/privacy-policy"}
              target="_blank"
              className="text-[#2D61F0] satoshi_bold hover:text-[#2433A7] active:text-[#666687] duration-300"
            >
              Privacy Policy
            </NavLink>
          </p>
          <Button
            children="Create an account"
            type="submit"
            className="w-full button-lg active:text-[#6681F4] text-sm py-[13px] rounded-full text-white my-2"
          />
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#666687]" />
          <span className="px-2 text-[#666687] text-sm">OR</span>
          <hr className="flex-grow border-[#666687]" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-white hover:border-[#364CEB] active:text-[#000000A6] active:bg-[#D9E4FD] flex items-center justify-center gap-2 bg-white py-[10px] rounded-full text-gray-700 font-medium cursor-pointer"
        >
          <img src={Google} alt="Google" className="w-5 h-5" />
          <p className="satoshi_medium text-sm">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
