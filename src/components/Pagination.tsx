import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-7">
      <p className="">Page 1 of 5 </p>
      <IoIosArrowBack size={20} className="cursor-pointer" />
      <IoIosArrowForward size={20} className="cursor-pointer" />
    </div>
  );
};

export default Pagination;
