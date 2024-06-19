"use client";
import Pagination from "@/components/Pagination";
import { DevelopersIcon } from "@/components/admin/icons/DevelopersIcon";
import { StatsCard } from "@/components/admin/ui/StatsCard";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  const axiosAuth = useAxiosAuth();

  const { data, error } = useQuery({
    queryKey: ["count"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/count`),
  });

  const count = data?.data?.data;

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };
  return (
    <div className="pb-20">
      <h2 className="text-primary text-3xl font-sfBold mb-7">Developers</h2>
      <section className="flex gap-5 mb-12 overflow-auto pb-5">
        <StatsCard
          stat={count?.developers}
          title="Developers"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
        <StatsCard
          // stat="20"
          title="Active"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
        <StatsCard
          // stat="5"
          title="Disabled"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
      </section>

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
