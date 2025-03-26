import "./login.css";
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
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: { email: "", password: "" },
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = { email: "", password: "" };

    if (!formState.email) {
      newError.email = "Email is required!";
    }
    if (!formState.password) {
      newError.password = "Password is required!";
    }

    setFormState((prevState) => ({ ...prevState, error: newError }));

    if (!newError.email && !newError.password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formState.email,
          formState.password
        );

        const user = userCredential.user;
        localStorage.setItem("user", user.displayName || user.email); 

        navigate("/new-chat");
      } catch (error) {
        console.error("Login Error:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      localStorage.setItem("user", user.displayName || user.email);

      navigate("/new-chat");
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  return (
    <div className="satoshi w-full min-h-screen bg-[#536DFE] flex items-center justify-center p-5 pt-2">
      <div className="bg-[#EDF3FE] rounded-[32px] shadow-lg p-8 px-[108px] max-md:px-[30px] max-md:py-5 w-[575px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="w-[60px]" />
        </div>

        <h2 className="text-[24px] font-semibold text-center mt-4">
          Welcome on board!👋
        </h2>
        <p className="text-[#666687] text-center text-[15px]">
          Please, login with your email and password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
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
          <div className="mb-[12px]">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              error={formState.error.password}
            />
          </div>
          <div className="text-right  text-[15px] text-[#364CEB] mb-4 hover:text-[#2433A7] active:text-[#666687] duration-300">
            <NavLink to={"/forgot-password"}>Forgot password?</NavLink>
          </div>
          <Button
            children={"Log in"}
            type="submit"
            className="w-full button-lg active:text-[#6681F4] text-sm py-[13px] rounded-full text-white"
          />
        </form>

        <div className="text-center hover:text-[#2433A7] active:text-[#666687] duration-300 my-4 text-[#364CEB]">
          <NavLink to={"/sign-up"}>Create account</NavLink>
        </div>

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
          <p className="poppins text-sm">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
