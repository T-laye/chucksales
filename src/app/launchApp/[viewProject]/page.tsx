"use client";
import Pagination from "@/components/Pagination";
import Header from "@/components/landingPage/Header";
import CongratsModal from "@/components/modals/CongratsModal";
import ContributeModal from "@/components/modals/ContributeModal";
import Button from "@/components/ui/Button";
import {
  handleCongratsModal,
  handleContributeModal,
} from "@/redux/slices/variables";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const { showContributeModal, showCongratsModal } = useSelector(
    (state: any) => state.variables
  );
  //   console.log(showContributeModal);

  const handleOpenContributeModal = () => {
    dispatch(handleContributeModal(true));
    dispatch(handleCongratsModal(false));
  };
  const handleOpenCongratsModal = () => {
    dispatch(handleCongratsModal(true));
    dispatch(handleContributeModal(false));
  };

  return (
    <>
      <Header />
      <section className="pt-20 pb-40">
        <div className="h-[96px] md:h-[191px] w-full ">
          <Image
            src="/images/cover_pic.png"
            alt="cover photo"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container px-4 md:px-8 mx-auto flex flex-col items-center md:items-start -mt-8 md:-mt-16">
          <div className="h-20  w-20 md:h-[160px] md:w-[160px] rounded-full  overflow-hidden ">
            <Image
              src="/images/ethereum_logo.png"
              alt="cover photo"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold md:text-3xl mt-1">
              Ethereum Shitcoin
            </h3>
          </div>
          <div className=" flex flex-col mt-2  w-full md:flex-row md:justify-between items-center">
            <div className="max-w-3xl">
              <p className="text-xs md:text-base text-center md:text-start  ">
                Chuck was born out of a deep admiration for the iconic Chuck
                Norris memes, but it stands for so much more than just internet
                meme. This token is at the core of a vibrant and fun-loving meme
                community with a noble mission: to shine a light on animal
                welfare. So, whether you are here.
              </p>
              <div className=" flex gap-x-7 gap-y-3 items-center my-6 flex-wrap justify-center md:justify-start">
                <div className="flex items-center gap-4">
                  <div className="min-h-5 min-w-5 h-5 w-5 rounded-full bg-dark">
                    {" "}
                    <Image
                      src="/icons/x_logo.svg"
                      alt="x_logo"
                      width={700}
                      height={700}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>@ether_shitcoin</div>
                </div>
                <div className=" flex items-center gap-4 ">
                  <div className="min-h-5 min-w-5 h-5 w-5 rounded-full bg-dark">
                    {" "}
                    <Image
                      src="/icons/discord_logo.svg"
                      alt="discord_logo"
                      width={700}
                      height={700}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>Ether Shitcoin</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="min-h-5 min-w-5 h-5 w-5 rounded-full bg-dark">
                    {" "}
                    <Image
                      src="/icons/telegram_logo.svg"
                      alt="telegram_logo"
                      width={700}
                      height={700}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>@ether_shitcoin</div>
                </div>
              </div>
            </div>
            <Button
              title="Contribute"
              css="w-full md:w-[145px]"
              fn={handleOpenContributeModal}
            />
          </div>
        </div>

        <section className="mt-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div>
              <div className="border border-primaryTransparent rounded-lg py-2  ">
                <h3 className="p-5 pt-2">Recent Contributions</h3>
                <div className="border-t  border-primaryTransparent py-2 overflow-x-auto">
                  <table>
                    <thead className="border-b border-primaryTransparent ">
                      <tr>
                        <td>Contributor</td>
                        <td>Token Contributed</td>
                        <td>Amount</td>
                        <td>Percentage recieved</td>
                        <td>Time</td>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td className="">0xght456ytn54 j890lkijbh12</td>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">45 USD</span>
                          </div>
                        </td>
                        <td>45ETH/5,000 USD</td>
                        <td>20%</td>
                        <td className="">2mins ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </section>
      </section>
      {showContributeModal && (
        <ContributeModal showCongratsModal={handleOpenCongratsModal} />
      )}
      {showCongratsModal && <CongratsModal />}
    </>
  );
};

export default Page;