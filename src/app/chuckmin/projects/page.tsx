"use client";
import Pagination from "@/components/Pagination";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize } from "@/utils/Helpers";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const axiosAuth = useAxiosAuth();
  const router = useRouter();
  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const { order, take, pageNumber, search } = useSelector(
    (state: any) => state.variables
  );
  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["projects", order, pageNumber, take],
    queryFn: () =>
      axiosAuth.get(
        `/projects/general?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });
  const projectData = data?.data?.data?.projects?.data;
  const projectCount = data?.data?.data?.totalCount;

  console.log(projectData);

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "text-primary border-b border-primary " : ""
    } whitespace-nowrap px-1 pb-4 duration-150 cursor-pointer  h-[28px] flex justify-center items-center text-sm sm:text-base md:text-xl`;
  };

  const renderProjects = () => {
    return projectData?.map((p: any) => (
      <tr key={p.id}>
        <td>
          <div className="flex justify-start items-center gap-3 ">
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white overflow-hidden">
              {p?.projectImageUrl && (
                <Image
                  src={p?.projectImageUrl}
                  alt={p.name}
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="block">{capitalize(p.name)}</span>
          </div>
        </td>
        <td className="">{p.network}</td>
        <td className="">{p.wallet}</td>
        <td className="">{p.formattedTotalAmount}</td>
        <td>{p.totalToken}</td>
        <td>{p.totalTokenCirculation}</td>
        <td>{p.percentageCirculation}%</td>
        <td className=" ">{p.extension}</td>
        <td className="">{p.email}</td>
        <td className="">{p.createdDate}</td>
        <td className=" ">{p.status}</td>
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
              value={`/chuckmin/projects/${p.id}/preview`}
            >
              Preview
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
      <div className="">
        <div className="border border-primaryTransparent rounded-lg  mt-10 overflow-auto ">
          <div className="py-2  ">
            {
              <table className="">
                <thead className="border-b border-primaryTransparent ">
                  <tr>
                    <td className="">Name</td>
                    <td>Network</td>
                    <td>Wallet Address</td>
                    <td>Total Amount Generated</td>
                    <td>Total Token</td>
                    <td>Total Circulation</td>
                    <td>Percentage Circulation</td>
                    <td>Extension</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Status</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>{renderProjects()}</tbody>
              </table>
            }
          </div>
        </div>
      </div>
      {projectData?.length > 0 && <Pagination totalCount={projectCount} />}
    </div>
  );
};

export default Page;
