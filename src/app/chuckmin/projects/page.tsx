"use client";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "text-primary border-b border-primary " : ""
    } whitespace-nowrap px-1 pb-4 duration-150 cursor-pointer  h-[28px] flex justify-center items-center text-sm sm:text-base md:text-xl`;
  };

  return (
    <div>
      <h2 className="text-primary text-3xl font-sfBold mb-7">Projects</h2>

      <div className="flex gap-3 sm:gap-6 flex-wrap">
        <div onClick={() => handleActiveTab(0)} className={tabStyle(0)}>
          All Projects
        </div>
        <div onClick={() => handleActiveTab(1)} className={tabStyle(1)}>
          Completed
        </div>

        <div onClick={() => handleActiveTab(2)} className={tabStyle(2)}>
          Pending
        </div>
        <div onClick={() => handleActiveTab(3)} className={tabStyle(3)}>
          Cancelled
        </div>
      </div>
      <div className="border border-primaryTransparent rounded-lg  mt-10 ">
        {/* <h3 className="p-5 pt-2"> Project ({projectCount || 0})</h3> */}
        <div className="py-2  overflow-x-auto">
          {
            <table>
              <thead className="border-b border-primaryTransparent ">
                <tr>
                  <td className="">Name</td>
                  <td>Network</td>
                  <td>Wallet Address</td>
                  <td>Total Amount Generated</td>
                  <td>Total Token</td>
                  {/* <td>Total Circulation</td>
                  <td>Percentage Circulation</td>
                  <td>Extension</td>
                  <td>Email</td> */}
                  <td>Status</td>
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
                  <td>0xght456ytn54j890lkijbh12</td>
                  <td>loading...</td>
                  <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
                    <select
                      className="bg-dark text-center focus:outline-none"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option className="bg-dark text-center" value="">
                        Actions
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/editProject`}
                      >
                        Edit
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/viewProject`}
                      >
                        Preview
                      </option>
                      <option className="bg-dark" value="#">
                        Delete
                      </option>
                    </select>{" "}
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
                  <td>0xght456ytn54j890lkijbh12</td>
                  <td>loading...</td>
                  <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
                    <select
                      className="bg-dark text-center focus:outline-none"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option className="bg-dark text-center" value="">
                        Actions
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/editProject`}
                      >
                        Edit
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/viewProject`}
                      >
                        Preview
                      </option>
                      <option className="bg-dark" value="#">
                        Delete
                      </option>
                    </select>{" "}
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
                  <td>0xght456ytn54j890lkijbh12</td>
                  <td>loading...</td>
                  <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
                    <select
                      className="bg-dark text-center focus:outline-none"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option className="bg-dark text-center" value="">
                        Actions
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/editProject`}
                      >
                        Edit
                      </option>
                      <option
                        className="bg-dark"
                        // value={`/dashboard/${p.id}/viewProject`}
                      >
                        Preview
                      </option>
                      <option className="bg-dark" value="#">
                        Delete
                      </option>
                    </select>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </div>
      {/* {projectData?.length > 0 &&  */}
      <Pagination
        totalCount={13}
        // totalCount={projectCount}
      />
      {/* } */}
    </div>
  );
};

export default Page;
