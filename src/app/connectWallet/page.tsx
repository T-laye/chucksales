"use client";
import Header from "@/components/landingPage/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Connector, useConnect } from "wagmi";

const Page = () => {
  const { connectors, connect } = useConnect();

  // console.log(connect);
  // console.log(connectors);

  const renderConnectors = () => {
    return connectors.map((connector) => (
      // <button
      //   className="flex "
      //   key={connector.uid}
      //   onClick={() => connect({ connector })}
      // >
      //   {connector.name}
      // </button>
      <div
        key={connector.uid}
        onClick={() => connect({ connector })}
        className="h-16 gap-3 px-3 py-[10px] flex items-center hover:bg-primaryTransparent duration-150 cursor-pointer"
      >
        <div className="h-10 w-10 rounded-lg overflow-hidden">
          <Image
            src={`/images/${connector.type}.png`}
            alt="trust wallet"
            height={400}
            width={400}
            className="h-full w-full object-fill"
          />
        </div>
        <div className="text-sm">{connector.name}</div>
      </div>
    ));
  };

  return (
    <section className="">
      <Header />
      <div className="section-container h-screen flex justify-center items-center ">
        <div className="sm:px-11 w-full max-w-[459px] min-h-[317px] bg-customGrayTransparent  py-8 rounded-[12px]">
          <h3 className="text-primary text-center">Connect Wallet</h3>
          <p className="text-[#D3DDF2] md:text-base text-xs text-center px-2 mt-3 mb-8">
            {" "}
            Make sure you keep your private keys, passcode or seed phrase
            securely. Never share them with anyone!
          </p>
          <div className="min-h-[132px] w-full rounded-[12px] bg-customGrayLight overflow-hidden">
            {/* <div className="h-16 gap-3 border-b-[0.5px] border-b-[#ffffff70] hover:bg-primaryTransparent duration-150 cursor-pointer px-3 py-[10px] flex items-center">
              <div className="h-8 w-8">
                <Image
                  src="/images/meta_mask_logo.png"
                  alt="meta mask"
                  height={100}
                  width={300}
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm">Meta Mask</div>
            </div>
            <div className="h-16 gap-3 border-b-[0.5px] border-b-[#ffffff70] px-3 py-[10px] flex items-center hover:bg-primaryTransparent duration-150 cursor-pointer">
              <div className="h-8 w-8">
                <Image
                  src="/images/wallet_connect_logo.png"
                  alt="wallet connect"
                  height={100}
                  width={300}
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm">Wallet Connect</div>
            </div>
            <div className="h-16 gap-3 px-3 py-[10px] flex items-center hover:bg-primaryTransparent duration-150 cursor-pointer">
              <div className="h-8 w-8">
                <Image
                  src="/images/trust_wallet_logo.png"
                  alt="trust wallet"
                  height={100}
                  width={300}
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm">Meta Mask</div>
            </div> */}
            {renderConnectors()}
          </div>
          <div className="md:text-sm text-xs text-center text-primary mt-6 ">
            {/* <Link href="#"> More wallet options </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
