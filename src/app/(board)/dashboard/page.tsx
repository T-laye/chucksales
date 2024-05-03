"use client";
import Header from "@/components/landingPage/Header";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "bg-customGray " : ""
    } whitespace-nowrap p-[10px] duration-150 cursor-pointer  rounded-lg h-[28px] flex justify-center items-center text-xs md:text-base`;
  };

  return (
    <>
      <Header />
      <section className="py-20">
        <div className="h-[96px] w-full ">
          <Image
            src="/images/cover_pic.png"
            alt="cover photo"
            width={700}
            height={700}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto flex flex-col items-center -mt-8">
          <div className="h-20  w-20 rounded-full border-2 border-dark overflow-hidden ">
            <Image
              src="/images/profile_pic.png"
              alt="cover photo"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mt-1">Johnson Sam</h3>
            <p className="text-xs mt-1">0xwimnkd48h8...nje983hfbuj</p>
            <p className="text-xs mt-1">Joined April 15th</p>
          </div>
        </div>

        <section className="mt-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div>
              <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-10 md:justify-between gap-3">
                <div className="flex gap-1 ">
                  <div
                    onClick={() => handleActiveTab(0)}
                    className={tabStyle(0)}
                  >
                    All
                  </div>
                  <div
                    onClick={() => handleActiveTab(1)}
                    className={tabStyle(1)}
                  >
                    Pending Contributions
                  </div>

                  <div
                    onClick={() => handleActiveTab(2)}
                    className={tabStyle(2)}
                  >
                    Completed contributions
                  </div>
                </div>

                <div className="flex flex-col mt-2 relative md:mb-0 md:flex-1 md:max-w-[325px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-primaryTransparent placeholder:text-sm pl-10 mt-0"
                  />
                  <BiSearch size={24} className="absolute top-3 left-3" />
                </div>
              </div>

              <div className="my-16 ">
                <h4 className="text-center mb-6">
                  Oops you don&apos;t have any project
                </h4>
                <Button title="Add project" css="w-full" />
              </div>

              <div className="border border-primaryTransparent rounded-lg py-2  ">
                <h3 className="p-5 pt-2"> Project (6)</h3>
                <div className="border-t  border-primaryTransparent py-2 overflow-x-auto">
                  <table>
                    <thead className="border-b border-primaryTransparent ">
                      <tr>
                        <td>Name</td>
                        <td>Amount raised</td>
                        <td>Time left</td>
                        <td>Wallet address</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                      {/* Data */}
                      <tr>
                        <td>
                          <div className="flex justify-center items-center gap-3 ">
                            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
                            <span className="block">USDT</span>
                          </div>
                        </td>
                        <td className="">45 USD</td>
                        <td className="">01:45:30</td>
                        <td>0xght456ytn54j890lkijbh12</td>
                        <td>
                          <Button title="View project" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
