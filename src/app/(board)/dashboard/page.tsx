"use client";
import Pagination from "@/components/Pagination";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import axios from "@/config/axios";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize, formatDate } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlOptions } from "react-icons/sl";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import Link from "next/link";
import { handleSearch } from "@/redux/slices/variables";

const Page = () => {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState(0);
  const [showOptionId, setShowOptionId] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const axiosAuth = useAxiosAuth();
  // const { auth } = useSelector((state: any) => state.auth);
  const [selectedOption, setSelectedOption] = useState("");
  const queryClient = useQueryClient();
  // console.log(queryClient);
  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axiosAuth.get(`/auth/dev/profile`),
  });
  const user = userData?.data?.data;

  const { order, take, pageNumber, search } = useSelector(
    (state: any) => state.variables
  );
  // const user = auth?.user;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["projects", order, pageNumber, take],
    queryFn: () =>
      axiosAuth.get(
        `/projects/user?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });

  const {
    data: searchedData,
    isLoading: searching,
    error: searchError,
    isError: isSearchError,
  } = useQuery({
    queryKey: ["searchedProjects", search],
    queryFn: () => {
      if (search) {
        return axios.get(`/projects/search/${search}`);
      }
    },
  });
  const projectData = search
    ? searchedData?.data?.data
    : data?.data?.data?.projects?.data;
  const projectCount = search
    ? searchedData?.data?.count
    : data?.data?.data?.totalCount;

  const errorCode = search ? searchError?.message : error?.message;

  // console.log(searchedData?.data?.data);

  if (isError) {
    if (errorCode === "Request failed with status code 401") {
      router.replace("/signIn");
      console.log(error);
      toast({ dispatch, message: "Unauthorized Please Login" });
    } else {
      toast({ dispatch, message: "Something went wrong!!!" });
    }
  }

  // console.log(user);

  const gotoAddProject = () => {
    router.push("/dashboard/addProject");
  };

  const gotoViewProject = (id: string) => {
    router.push(`/dashboard/${id}/viewProject`);
  };

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (e: any) => {
    const term = e.target.value;

    dispatch(handleSearch(term));
  };

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "bg-customGray " : ""
    } whitespace-nowrap p-[10px] duration-150 cursor-pointer  rounded-lg h-[28px] flex justify-center items-center text-xs md:text-base`;
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
        <td className="">{p.walletAddress}</td>
        <td className="">{p.totalAmountGenerate}</td>
        <td>{p.totalToken}</td>
        <td>{p.totalTokenCirculation}</td>
        <td>{p.percentageCirculation}%</td>
        <td className=" ">{p.extension}</td>
        <td className="">{p.email}</td>
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
            <option
              className="bg-dark"
              value={`/dashboard/${p.id}/editProject`}
            >
              Edit
            </option>
            <option
              className="bg-dark"
              value={`/dashboard/${p.id}/viewProject`}
            >
              Preview
            </option>
            <option className="bg-dark" value="#">
              Delete
            </option>
          </select>{" "}
        </td>
      </tr>
    ));
  };

  return (
    <>
      <section className="">
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
          <div className="h-20  w-20 md:h-[160px] md:w-[160px] rounded-full border-2 border-dark bg-customGray overflow-hidden ">
            {user?.profileImageUrl && (
              <Image
                src={user?.profileImageUrl}
                alt="cover photo"
                width={700}
                height={700}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <div className=" md:flex justify-between items-end w-full">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold md:text-3xl mt-1">
                {capitalize(user?.name)}
              </h3>
              <p className="text-xs md:text-base mt-1">
                {isConnected ? address : ""}
              </p>
              <p className="text-xs md:text-base mt-1">
                {user?.createdDate
                  ? `Joined ${formatDate(user?.createdDate)}`
                  : ""}
              </p>
            </div>

            {data && (
              <Button
                title="Add project"
                css=" w-fit mt-2 hidden md:block"
                fn={gotoAddProject}
              />
            )}
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
                <div className="flex w-full gap-2 items-center justify-end ">
                  <div className="flex w-full flex-col mt-2 relative md:mb-0 md:flex-1 md:max-w-[325px]">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={handleChange}
                      className=" border-primaryTransparent placeholder:text-sm pl-10 mt-0"
                    />
                    <BiSearch size={24} className="absolute top-3 left-3" />
                  </div>
                  {data && (
                    <Button
                      title="Add project"
                      css=" w-fit mt-2 md:hidden"
                      fn={gotoAddProject}
                    />
                  )}
                </div>
              </div>

              {!data && isLoading ? (
                <Loading />
              ) : data && !projectCount ? (
                <div className="my-16 flex flex-col items-center">
                  <h4 className="text-center md:text-xl mb-6">
                    {search
                      ? "No project found"
                      : "Oops you don't have any project"}
                  </h4>
                  {!search && (
                    <Button
                      title="Add project"
                      css="w-full md:w-[145px]"
                      fn={gotoAddProject}
                    />
                  )}
                </div>
              ) : (
                <div className="border border-primaryTransparent rounded-lg py-2  ">
                  <h3 className="p-5 pt-2"> Project ({projectCount || 0})</h3>
                  <div className="border-t  border-primaryTransparent py-2  overflow-x-auto">
                    {
                      <table>
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
                            <td>Status</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Data */}
                          {renderProjects()}
                          {/* <tr>
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
                            <td>
                              <Button title="View project" />
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
          {projectData?.length > 0 && <Pagination totalCount={projectCount} />}
        </section>
      </section>
    </>
  );
};

export default Page;
