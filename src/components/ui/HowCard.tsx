import Image from "next/image";
import React from "react";

interface HowCardProps {
  reverse?: boolean;
  image: string;
  number: string;
  title: string;
  text: string;
}

const HowCard: React.FC<HowCardProps> = ({
  reverse = false,
  image,
  number,
  text,
  title,
}) => {
  return (
    <div
      className={`${
        reverse && "flex-row-reverse"
      } md:flex items-center justify-center gap-24`}
    >
      <div
        className={`flex-1 flex ${reverse ? "justify-start" : "justify-end"}`}
      >
        <div className="w-[180px] h-[180px]  rounded-[12px] overflow-hidden hidden md:block ">
          <Image
            src={image}
            alt="How to Connect to wallet"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={`flex flex-col flex-1 gap-2 ${
          reverse ? "md:items-end" : ""
        } `}
      >
        <div className="font-sfBold bg-primary text-[30px] w-[52px] h-[52px] rounded-full flex justify-center items-center">
          {number}
        </div>
        <h2 className="font-sfBold">{title}</h2>
        <p className={`text-base ${reverse ? "md:text-end" : ""}`}>{text}</p>
      </div>
    </div>
  );
};

export default HowCard;
