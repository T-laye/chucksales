"use client";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import DocComponents from "@/components/ui/DocComponents";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

const Page = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathName = usePathname();

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <Header />
      <section className="min-h-screen">
        <div className="section-container  lg:flex ">
          <div className="fixed  w-full lg:w-1/5  lg:bottom-0 lg:h-screen top-16 left-0 px-4 h-12 flex items-center  bg-dark">
            <div className=" mx-auto container  lg:mx-auto lg:h-full w-full  bg-dark lg:mt-48">
              <IoMenuOutline
                onClick={handleOpenNav}
                size={28}
                className="text-white  lg:hidden sm:ml-4 cursor-pointer"
              />
              <div
                onClick={handleOpenNav}
                className={`${
                  openNav
                    ? "translate-x-0 duration-150"
                    : "-translate-x-[200%] duration-150"
                } fixed lg:static lg:translate-x-0 top-28 flex flex-col items-center 2xl:items-end lg:bg-dark bg-customGray w-[176px] min-h-[216.5px] rounded-lg lg:w-full  lg:rounded-none lg:h-full p-2 `}
              >
                <Logo w="w-[144px] lg:hidden" />
                <ul className=" px-2 flex flex-col w-full lg:w-fit bg-customGray lg:bg-dark 2xl:mx-0 2xl:place-self-end mx-auto gap-1 ">
                  <h4 className="mt-5 mb-1 lg:text-xl">OVERVIEW</h4>
                  <NavLink
                    title="Introduction"
                    url="#intro"
                    css="text-xs lg:text-base"
                  />
                  <NavLink
                    title="What is Chucksale ?"
                    url="#whatIsChucksale"
                    css="text-xs lg:text-base"
                  />
                  <NavLink
                    title="How Chucksale is used"
                    url="#how"
                    css="text-xs lg:text-base"
                  />
                  <NavLink
                    title="How Chucksale is different"
                    url="#howDifferent"
                    css="text-xs lg:text-base"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5  max-w-[1000px] bg-dark lg:ml-52 2xl:ml-80 md:px-8 ">
            <h2 className="font-sfBold mt-10 lg:mt-0 md:text-3xl lg:text-5xl">
              Documentation
            </h2>

            <div className="mt-8 ">
              <DocComponents
                topic="Introduction"
                content="Welcome to Chucksale, a revolutionary platform that transforms the way presales are conducted in the world of cryptocurrency. Chucksale leverages the power of blockchain technology, specifically the Ethereum Layer 2 (L2) network, to provide users with a seamless and transparent experience when participating in presale events."
                id="intro"
              />

              <DocComponents
                topic="What is Chucksale and Crypto Network Used ?"
                content="Chucksale is a platform designed to streamline the process of participating in cryptocurrency presales. Built on top of the Ethereum Layer 2 network, Chucksale utilizes the speed and scalability of L2 solutions to ensure fast and cost-effective transactions for users."
                id="whatIsChucksale"
              />

              <DocComponents
                topic="How Chucksale is used ?"
                content={
                  <p>
                    {" "}
                    Using Chucksale is straightforward and user-friendly.
                    Here&apos;s a step-by-step guide on how to use the platform:
                    <br />
                    1. Connect Wallet: Users connect their Ethereum wallets to
                    the Chucksale platform to interact with smart contracts and
                    participate in presale events.
                    <br />
                    <br />
                    2. Send Funds: users can also manually send funds to the
                    designated presale address to purchase presale tokens at a
                    predetermined price.
                    <br />
                    <br />
                    3. Receive Tokens: In return for their contribution, users
                    receive a percentage of the presale token equivalent to the
                    amount of funds they have contributed.
                    <br />
                    <br />
                    4. Dashboard: Chucksale provides a comprehensive dashboard
                    for both developers and users. Developers can monitor the
                    total amount raised during the presale event, while users
                    can track their individual contributions and the total
                    amount up to distribution.
                    <br />
                    <br />
                    5. Distribution: After the presale event concludes, tokens
                    are distributed to users based on their contributions.
                    Chucksale ensures a fair and transparent distribution
                    process, with tokens sent directly to users&apos; wallets.
                  </p>
                }
                id="how"
              />

              <DocComponents
                topic="How is Chucksale different from other Presale Methods ?"
                content={
                  <p>
                    Chucksale stands out from other presale methods in several
                    key ways:
                    <br />
                    <br />
                    - Ethereum Layer 2: Chucksale utilizes the Ethereum Layer 2
                    network, providing users with fast and cost-effective
                    transactions compared to traditional Ethereum transactions.
                    <br />
                    <br />
                    - Transparency: Chucksale offers complete transparency
                    throughout the presale process. Users can track
                    contributions and token distribution through the
                    platform&apos;s dashboard, ensuring trust and
                    accountability.
                    <br />
                    <br />
                    - User-Friendly Interface: Chucksale is designed with the
                    user in mind, offering a simple and intuitive interface for
                    participating in presale events. Connecting wallets, sending
                    funds, and monitoring contributions can all be done
                    seamlessly through the platform.
                    <br />
                    <br />- Fair Distribution: Chucksale prioritizes fairness in
                    token distribution, ensuring that all users receive their
                    allocated tokens based on their contributions. This helps
                    prevent issues such as front-running and unfair advantage.
                    With Chucksale, participating in cryptocurrency presales has
                    never been easier or more transparent. Join us today and be
                    part of the future of fundraising in the crypto space!
                  </p>
                }
                id="howDifferent"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
