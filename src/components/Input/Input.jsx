import React, { useState } from "react";
import closeEye from "../../assets/icon/closeEye.svg";
import openEye from "../../assets/icon/openEye.svg";
const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  minLength,
  className,
  checked,
  invalidCred,
}) => {
  const [eyeIcon, setEyeIcon] = useState(false);
  return (
    <div className="input-container relative">
      <input
        type={eyeIcon ? "text" : type}
        placeholder={placeholder}
        value={value}
        name={name}
        minLength={minLength}
        onChange={onChange}
        checked={checked}
        className={`${className} w-full py-[11px] px-[19px] rounded-full text-[15px] placeholder:text-[#717383] bg-white text-[#252840] outline-none border focus:border focus:border-[#2D54DD] ${
          error || invalidCred ? "border-[#FF0000]" : "border-white"
        }`}
      />
      {type === "password" && (
        <div
          onClick={() => setEyeIcon(!eyeIcon)}
          className=" top-[18px] absolute right-5 cursor-pointer"
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
