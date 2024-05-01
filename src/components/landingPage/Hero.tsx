"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Stats from "../ui/Stats";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const goToLaunchApp = () => {
    router.push("/launchApp");
  };

  const goToSignIn = () => {
    router.push("/signIn");
  };

  return (
    <section className=" hero_bg min-h-screen relative">
      <div className="absolute top-[0%] -right-[55%] sm:-right-[10%] 2xl:-right-[5%] -z-0 ">
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
      <div className="section-container flex flex-col justify-center  min-h-screen mt-16 lg:mt-[0%]">
        <div className="flex flex-col ">
          <h1 className="">
            Never struggle to <br className="" /> raise liquidity
          </h1>
          <p className="text-center text-sm w-4/5 mx-auto mt-6 mb-10 lg:text-xl">
            Dedicated to revolutionizing the way projects raise liquidity
            through presales.
          </p>
          <div className="flex justify-center items-center gap-4 lg:gap-8 flex-col  lg:flex-row z-10">
            <Button
              fn={goToLaunchApp}
              title="Launch app"
              css="w-full lg:w-[200px] "
            />
            <Button
              title="List my projects"
              css="w-full lg:w-[200px]   "
              primary={false}
              fn={goToSignIn}
            />
          </div>
        </div>

        <div className="bg-transparent flex flex-col sm:flex-row items-center justify-evenly h-[322px] sm:h-[162px] rounded-[40px] max-w-[280px] sm:max-w-[994px] gap-x-10 mx-auto w-full mt-24 lg:mt-56 z-10">
          <Stats stat={32} title="Developers" />
          <Stats stat={152} title="Contributors" />
          <Stats stat={500} title="Projects" />
        </div>
      </div>
    </section>
  );
}
