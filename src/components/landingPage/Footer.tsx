import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="container mx-auto px-5 lg:px-10 py-10 lg:py-20 md:flex md:items-center justify-evenly">
        <div className="mb-5">
          <Logo w="w-[192px] mx-auto" />
        </div>
        <div className="flex justify-around text-xs md:gap-24">
          <div className="flex flex-col gap-2 md:gap-6">
            <h4 className="text-base mb-2 md:mt-6 ">Refuel</h4>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Relay
            </Link>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Swap
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h4 className="text-base mb-2 md:mt-6">Resources</h4>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              FAQ
            </Link>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Developers
            </Link>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Docs
            </Link>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Support
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-base mb-2 md:mb-6 text-center md:text-start mt-4 ">
            Socials
          </h4>
          <div className="flex justify-center items-center gap-6">
            <Link href="#">
              <div className="w-6">
                <Image
                  src="/icons/x_logo.svg"
                  alt="X Logo"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="w-6">
                <Image
                  src="/icons/discord_logo.svg"
                  alt="X Logo"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="w-6">
                <Image
                  src="/icons/telegram_logo.svg"
                  alt="X Logo"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
