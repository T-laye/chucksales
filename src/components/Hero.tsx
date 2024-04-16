"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Stats from "./ui/Stats";

export default function Hero() {
  return (
    <section className=" hero_bg min-h-screen relative">
      <div className="absolute top-[10%] -right-[55%] lg:top-[0%] lg:-right-[70%] 2xl:-right-[50%] -z-0 ">
        <Image
          src="/images/big_glow.svg"
          height={500}
          width={500}
          alt="bg-glow"
          className="block"
        />
      </div>
      <div className="absolute top-[45%]  -left-[40%] lg:top-[25%] lg:-left-[10%]">
        <Image
          src="/images/big_glow.svg"
          height={500}
          width={500}
          alt="bg-glow"
          className=""
        />
      </div>
      <div className="section-container flex flex-col justify-center min-h-screen ">
        <div className="flex flex-col ">
          <h1 className="">
            Never struggle to <br className="" /> raise liquidity
          </h1>
          <p className="text-center text-sm w-4/5 mx-auto mt-6 mb-10 lg:text-xl">
            Dedicated to revolutionizing the way projects raise liquidity
            through presales.
          </p>
          <div className="flex justify-center items-center gap-4 lg:gap-8 flex-col  lg:flex-row z-10">
            <Button title="Launch app" css="w-full lg:w-[200px] " />
            <Button
              title="List my projects"
              css="w-full lg:w-[200px]   "
              primary={false}
            />
          </div>
        </div>

        <div className="bg-transparent flex flex-col sm:flex-row items-center justify-evenly h-[322px] sm:h-[162px] rounded-[40px] max-w-[280px] sm:max-w-[994px] gap-x-10 mx-auto w-full mt-20 z-10">
          <Stats stat={532} title="Developers" />
          <Stats stat={532} title="Contributors" />
          <Stats stat={532} title="Projects" />
        </div>
      </div>
    </section>
  );
}
