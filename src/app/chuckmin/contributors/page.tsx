"use client";
import Pagination from "@/components/Pagination";
import { UserIcon } from "@/components/admin/icons/UserIcon";
import { StatsCard } from "@/components/admin/ui/StatsCard";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize, formatDate } from "@/utils/Helpers";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const axiosAuth = useAxiosAuth();
  const { order, take, pageNumber } = useSelector(
    (state: any) => state.variables
  );

  const { data } = useQuery({
    queryKey: ["count"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/count`),
  });

  const count = data?.data?.data;
  const { data: contributorsData, error } = useQuery({
    queryKey: ["contributors"],
    queryFn: () =>
      axiosAuth.get(
        `/projects/contributors/general?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });

  const contributors = contributorsData?.data?.data?.contributors?.data;
  // const count = contributorsData?.data?.data?.contributors?.data;
  // console.log(contributors);
  // console.log(error);

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  const renderContributors = () => {
    return contributors?.map((p: any) => (
      <tr key={p.id}>
        <td>
          <div className="flex justify-start items-center gap-3 ">
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-customGrayLight overflow-hidden">
              {p?.project?.logo && (
                <Image
                  src={p?.project?.logo}
                  alt={p.project?.name}
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="block">
              {p?.project?.name && capitalize(p?.project?.name)}
            </span>
          </div>
        </td>
        {/* <td className="">{p.formattedAmount}</td> */}
        <td className="">{p.formattedAmount}</td>
        <td className="">{p.token}</td>
        <td className="">{p.walletAddress}</td>
        <td className="">{p.project?.status}</td>
        <td>{p.createdAt && formatDate(p.createdAt)}</td>
        <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
          <select
            className="bg-dark text-center focus:outline-none"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option className="bg-dark text-center" value="">
              Actions
            </option>
            {/* <option
              className="bg-dark"
              value={`/dashboard/${p.id}/editProject`}
            >
              Edit
            </option> */}
            <option
              className="bg-dark"
              value={`/chuckmin/projects/${p?.project?.id}/preview`}
            >
              Preview Project
            </option>
            {/* <option className="bg-dark" value="#">
              Delete
            </option> */}
          </select>{" "}
        </td>
      </tr>
    ));
  };

  return (
    <div className="pb-20">
      <h2 className="text-primary text-3xl font-sfBold mb-7">Contributors</h2>
      <section className="flex gap-5 mb-12 overflow-auto pb-5">
        <StatsCard
          stat={count?.contributors}
          title="Contributors"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <UserIcon />
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
                  <td>Project Name</td>
                  {/* <td className="">Name</td> */}
                  <td>Amount</td>
                  <td>Token</td>
                  <td>Wallet Address</td>
                  <td>Project Status</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {renderContributors()}
                {/*                
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
                        Preview Project
                      </option>
                      <option className="bg-dark" value="#">
                        Delete
                      </option>
                    </select>{" "}
                  </td>
                </tr> */}
              </tbody>
            </table>
          }
        </div>
      </div>
      {contributors?.length > 0 && (
        <Pagination totalCount={count?.contributors} />
      )}
    </div>
  );
};

export default Page;
