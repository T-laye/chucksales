import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Button from "./Button";

interface AboutCArdProps {
  icon: string;
  title: string;
  image: string;
  text: string;
  btnTitle: string;
  btnFn?: MouseEventHandler<HTMLButtonElement>;
  css?: string;
}

const AboutCard: React.FC<AboutCArdProps> = ({
  icon,
  title,
  image,
  text,
  btnTitle,
  btnFn,
  css,
}) => {
  return (
    <div className={`${css} flex flex-col items-center max-w-[996px] mx-auto sm:gap-10 lg:gap-[107px]`}>
      <div className="flex flex-col">
        <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-[6px] bg-customGray p-[5px] ">
          <Image
            src={icon}
            alt="Eye"
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="text-primary mt-4">{title}</h3>
        <p className="text-sm mt-4 md:text-base">{text}</p>

        <Button title={btnTitle} fn={btnFn} css="w-full mt-6 lg:w-[147px]" />
      </div>
      <div className="w-full max-w-[480px] rounded-3xl  h-[261px] lg:h-[400px] 2xl:h-[480px] overflow-hidden object-cover mt-12 sm:mt-0 ">
        <Image
          src={image}
          alt="Process Picture"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutCard;
