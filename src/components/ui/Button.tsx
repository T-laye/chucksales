import React from "react";

interface ButtonProps {
  w?: string;
}

const Button: React.FC<ButtonProps> = ({ w }) => {
  return (
    <button
      className={`${w} py-2 px-[10px] lg:px-[20px] lg:h-11 hover:scale-[0.96] active:scale-[1.05] duration-150  bg-primary rounded-lg text-sm lg:text-base min-w-24 lg:min-w-[120px] whitespace-nowrap font-sfReg`}
    >
      Connect wallet
    </button>
  );
};

export default Button;
