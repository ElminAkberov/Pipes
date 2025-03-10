import "./login.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import Input from "../../../components/Input/Input";
import Google from "../../../assets/icon/google.svg";
import Button from "../../../components/Button/Button";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: { email: "", password: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = { email: "", password: "" };

    if (!formState.email) {
      newError.email = "Email is required!";
    }

    if (!formState.password) {
      newError.password = "Password is required!";
    }

    setFormState((prevState) => ({
      ...prevState,
      error: newError,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="satoshi w-full min-h-screen bg-[#536DFE] flex items-center justify-center p-5 pt-2">
      <div className="bg-[#EDF3FE] rounded-2xl shadow-lg p-8 px-[100px] max-md:px-[30px] max-md:py-5 w-[657px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" />
        </div>

        <h2 className="text-[32px] font-semibold text-center mt-4">
          Welcome on board!👋
        </h2>
        <p className="text-[#666687] text-center">
          Please, login with your email and password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
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
          <div className="mb-[12px]">
            <Input
              type={"password"}
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              error={formState.error.password}
            />
          </div>
          <div className="text-right text-[#364CEB] mb-8 hover:text-[#2433A7] active:text-[#666687] duration-300">
            <NavLink to={""}>Forgot password?</NavLink>
          </div>
          <Button
            children={"Log in"}
            type="submit"
            className="w-full button-lg active:text-[#6681F4] text-sm py-[15px] rounded-full text-white"
          />
        </form>

        <div className="text-center hover:text-[#2433A7] active:text-[#666687] duration-300 my-8 text-[#364CEB]">
          <NavLink to={"/sign-up"}>Create account</NavLink>
        </div>

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

export default Login;
