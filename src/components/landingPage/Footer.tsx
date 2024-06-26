import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-5 lg:px-10 py-10 lg:py-20 md:flex md:items-center justify-evenly">
        <div className="mb-5">
          <Logo w="w-[192px] mx-auto" />
        </div>
        {/* <h4 className="text-base mb-2 md:mt-6 md:text-lg">Resources</h4> */}
        <div className="flex justify-around items-center text-xs md:text-base md:gap-24">
          <div className="flex flex-col gap-2 md:gap-6 ">
            {/* <h4 className="text-base md:text-lg mb-2 md:mt-6 ">Refuel</h4> */}
            {/* <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Relay
            </Link> */}
            {/* <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              Developers
            </Link> */}
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href="/documentation"
            >
              Docs
            </Link>
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href="https://superbridge.app/base "
            >
              Swap
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            {/* <Link
              className="hover:text-primary duration-150 inline-bock"
              href=""
            >
              FAQ
            </Link> */}
            <Link
              className="hover:text-primary duration-150 inline-bock"
              href="mailto:support@chucksales.com"
            >
              Support
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-base mb-2 md:mb-6 text-center md:text-lg md:text-start mt-4 md:mt-0 ">
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
