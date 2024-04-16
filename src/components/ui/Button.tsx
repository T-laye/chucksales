import React, { MouseEventHandler } from "react";

interface ButtonProps {
  css?: string;
  title: string;
  fn?: MouseEventHandler<HTMLButtonElement>;
  nav?: boolean;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  css,
  title,
  fn,
  nav = false,
  primary = true,
}) => {
  return (
    <button
      onClick={fn}
      className={`${css} ${nav ? "" : "lg:h-[63px] h-[49px]"} ${
        primary ? "bg-primary" : "bg-none border border-primary text-primary"
      } py-2 px-[10px] lg:px-[20px] lg:h-11 hover:scale-[0.96] active:scale-[1.05] duration-150   rounded-lg text-sm lg:text-base min-w-24 lg:min-w-[120px] whitespace-nowrap font-sfReg`}
    >
      {title}
    </button>
  );
};

export default Button;
