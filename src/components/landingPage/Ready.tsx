"use client";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Ready = () => {
  const router = useRouter();

  const gotoSignUp = () => {
    router.push("/signUp");
  };
  const gotoLaunchApp = () => {
    router.push("/");
  };

  return (
    <section className="bg-primary">
      <div className="section-container  md:flex md:items-center md:gap-28">
        <div className="lg:w-1/2">
          <h3 className="leading-6 md:text-3xl lg:text-5xl">
            Ready to be part of the future of presale liquidity?
          </h3>

          <p className="text-sm md:text-lg my-6">
            Join chuksale today and start exploring exciting presale
            opportunities. Whether you&apos;re a project creator looking to
            raise funds or a contributor looking for promising new projects,
            we&apos;ve got you covered.
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              title="I'm a Developer"
              css="bg-white text-primary w-full md:w-[183px]"
              fn={gotoSignUp}
            />
            <Button
              title="I'm a Contributor"
              css="bg-white text-primary w-full md:w-[183px]"
              fn={gotoLaunchApp}
            />
          </div>
        </div>

        <div className=" flex justify-center md:justify-end mt-12 md:mt-0 md:w-1/2">
          <div className="relative ml-10 ">
            <div className="absolute top-10 -left-16 w-[94px] h-[94px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[170px] lg:top-20 rounded-3xl overflow-hidden object-cover">
              <Image
                src="/images/ready_1.png"
                alt="Picture of man"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[213px] h-[177px]  lg:w-[387px] lg:h-[322px] rounded-3xl overflow-hidden object-cover ">
              <Image
                src="/images/ready_image_2.png"
                alt="Picture of female programmer"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
