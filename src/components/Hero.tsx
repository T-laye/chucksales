"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Stats from "./ui/Stats";

export default function Hero() {
  return (
    <section className=" hero_bg min-h-screen relative">
      <div className="">
        <div className="absolute top-[10%] -right-[55%] lg:top-[10%] lg:-right-[50%]">
          <Image
            src="/images/big_glow.svg"
            height={500}
            width={500}
            alt="bg-glow"
            className="block"
          />
        </div>
        <div className="absolute top-[45%] lg:top-[70%] -left-[40%] lg:-left-[10%]">
          <Image
            src="/images/big_glow.svg"
            height={500}
            width={500}
            alt="bg-glow"
            className=""
          />
        </div>

        <div className="flex flex-col mt-[20%]">
          <h1 className="">
            Never struggle to <br className="" /> raise liquidity
          </h1>
          <p className="text-center text-sm w-4/5 mx-auto mt-6 mb-10 lg:text-xl">
            Dedicated to revolutionizing the way projects raise liquidity
            through presales.
          </p>
          <div className="flex justify-center items-center gap-4 lg:gap-8 flex-col  lg:flex-row ">
            <Button title="Launch app" css="w-full lg:w-[200px] " />
            <Button
              title="List my projects"
              css="w-full lg:w-[200px]   "
              primary={false}
            />
          </div>
        </div>

        <div className="bg-transparent flex flex-col sm:flex-row items-center justify-evenly h-[322px] sm:h-[162px] rounded-[40px] max-w-[280px] sm:max-w-[994px] gap-x-10 mt-20 ">
          <Stats stat={532} title="Developers" />
          <Stats stat={532} title="Contributors" />
          <Stats stat={532} title="Projects" />
        </div>
      </div>
    </section>
  );
}
