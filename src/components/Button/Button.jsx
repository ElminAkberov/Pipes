import React from "react";

const Button = ({
  onClick,
  children,
  type = "button",
  isLoading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading} 
      className={`cursor-pointer ${className} ${isLoading ? "loading" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
