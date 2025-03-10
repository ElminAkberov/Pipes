import React, { useState } from "react";
import closeEye from "../../assets/icon/closeEye.svg";
import openEye from "../../assets/icon/openEye.svg";
const Input = ({ type,name, placeholder, value, onChange, error }) => {
  const [eyeIcon, setEyeIcon] = useState(false);
  return (
    <div className="input-container relative">
      <input
        type={eyeIcon ? "text" : type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full py-[16.5px] px-[18px] rounded-full placeholder:text-[#717383] bg-white text-[#252840] outline-none border focus:border focus:border-[#2D54DD] ${
          error ? "border-[#FF0000]" : "border-white"
        }`}
      />
      {type === "password" && (
        <div
          onClick={() => setEyeIcon(!eyeIcon)}
          className=" top-6 absolute right-5 cursor-pointer"
        >
          <img src={!eyeIcon ? closeEye : openEye} alt="eyeicon" />
        </div>
      )}
      {error && (
        <span className="error-message text-[#FF0000] text-xs ml-5">
          Sorry, enter a valid {type}.
        </span>
      )}
    </div>
  );
};

export default Input;
