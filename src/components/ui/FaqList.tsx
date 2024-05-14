"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FaqListProps {
  question: string;
  answer: any;
  border?: boolean;
}

const FaqList: React.FC<FaqListProps> = ({
  question,
  answer,
  border = true,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className={`p-3 md:p-6 ${
          border ? "border-b-[0.5px] border-b-[#ffffff70]" : ""
        } flex justify-between items-center bg-[#242424] cursor-pointer`}
      >
        <h4 className="text-sm md:text-base">{question}</h4>
        <div>
          {!open ? (
            <IoIosArrowDown size={18} className="stroke-0 text-[#FFFFFFCC]" />
          ) : (
            <IoIosArrowUp size={18} className="stroke-0 text-[#FFFFFFCC]" />
          )}
        </div>
      </div>
      {open && (
        <div className="p-3 md:p-6 text-sm md:text-base bg-[#24242480] border-t-[0.25px] border-t-[#ffffff70]">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqList;
