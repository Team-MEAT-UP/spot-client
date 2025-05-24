import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isBlue?: boolean;
}
const Button = ({ children, isBlue, disabled, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-center w-full h-[52px] rounded-2xl text-lg font-semibold ${isBlue ? "bg-sub-sub text-white" : disabled ? "bg-gray-10 text-gray-30 cursor-not-allowed" : "bg-gray-90 text-white "}`}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
