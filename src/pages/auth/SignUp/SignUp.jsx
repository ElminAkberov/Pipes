import "./signup.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import Input from "../../../components/Input/Input";
import Google from "../../../assets/icon/google.svg";
import Button from "../../../components/Button/Button";

const SignUp = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: { fullName: "", email: "", password: "", confirmPassword: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = { fullName: "", email: "", password: "", confirmPassword: "" };
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

    setFormState((prevState) => ({
      ...prevState,
      error: newError,
    }));
  };

  return (
    <div className="satoshi w-full h-[100dvh] bg-[#536DFE] flex items-center justify-center px-5">
      <div className="bg-[#EDF3FE] rounded-2xl shadow-lg p-8 px-[100px] max-md:px-[30px] max-md:py-5 w-[657px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" />
        </div>

        <h2 className="text-[32px] font-semibold text-center mt-4">
          Create your account!
        </h2>
        <p className="text-[#666687] text-center">
          Already have an account?{" "}
          <NavLink to={"/"} className={"text-[#2D61F0] font-bold hover:text-[#2433A7] active:text-[#666687] duration-300"}>
            Log in
          </NavLink>
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <Input
              type={"text"}
              placeholder="Full name"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              error={formState.error.fullName}
            />
          </div>
          <div className="mb-4">
            <Input
              type={"email"}
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              error={formState.error.email}
            />
          </div>
          <div className="mb-4">
            <Input
              type={"password"}
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              error={formState.error.password}
            />
          </div>
          <div className="mb-[12px]">
            <Input
              type={"password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              error={formState.error.confirmPassword}
            />
          </div>
          <p className="text-[#7A8EA4] text-sm text-center mt-[40px]">
            By signing up, you agree to Pipes’s{" "}
            <NavLink to={""} className={"text-[#2D61F0] font-bold hover:text-[#2433A7] active:text-[#666687] duration-300"}>
              Terms of Service
            </NavLink>{" "}
            and{" "}
            <NavLink to={""} className={"text-[#2D61F0] font-bold hover:text-[#2433A7] active:text-[#666687] duration-300"}>
              Privacy Policy
            </NavLink>
          </p>
          <Button
            children={"Create an account"}
            type="submit"
            className="w-full button-lg  active:text-[#6681F4] text-sm py-[15px] rounded-full text-white my-4"
          />
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#666687]" />
          <span className="px-2 text-[#666687] text-sm">OR</span>
          <hr className="flex-grow border-[#666687]" />
        </div>

        <button className="w-full border border-white hover:border-[#364CEB] active:text-[#000000A6] active:bg-[#D9E4FD] flex items-center justify-center gap-2 bg-white py-[10px] rounded-full text-gray-700 font-medium cursor-pointer">
          <img src={Google} alt="Google" className="w-5 h-5" />
          <p className="poppins">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
