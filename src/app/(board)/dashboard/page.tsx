"use client";
import Pagination from "@/components/Pagination";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import axios from "@/config/axios";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize, formatDate } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlOptions } from "react-icons/sl";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import Link from "next/link";

const Page = () => {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState(0);
  const [showOptionId, setShowOptionId] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const axiosAuth = useAxiosAuth();
  const { auth } = useSelector((state: any) => state.auth);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };
  const { order, take, pageNumber } = useSelector(
    (state: any) => state.variables
  );
  const user = auth?.user;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["projects", order, pageNumber, take],
    queryFn: () =>
      axiosAuth.get(
        `/projects/user?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });
  const projectData = data?.data?.data;
  const errorCode = error?.message;

  // console.log(error);
  // console.log(projectData?.extension);

  if (isError) {
    if (errorCode === "Request failed with status code 401") {
      router.replace("/signIn");
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

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "bg-customGray " : ""
    } whitespace-nowrap p-[10px] duration-150 cursor-pointer  rounded-lg h-[28px] flex justify-center items-center text-xs md:text-base`;
  };

  const renderProjects = () => {
    return projectData?.projects?.data?.map((p: any) => (
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
        <td className=" ">{p.extension}</td>
        <td className="">{p.totalAmountGenerate}</td>
        <td>{p.totalToken}</td>
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
          {/* <SlOptions
            size={20}
            onClick={() => setShowOptionId(showOptionId === p.id ? null : p.id)}
            className="cursor-pointer"
          />
          {showOptionId === p.id && (
            <div
              onClick={() => setShowOptionId(false)}
              className="absolute flex flex-col rounded-xl right-12 top-10 z-50 overflow-hidden bg-customGray shadow-sm"
            >
              <Link
                className="hover:bg-primary px-4 py-1 duration-150 "
                href={`/dashboard/${p.id}/editProject`}
              >
                Edit
              </Link>
              <Link
                className="hover:bg-primary px-4 py-1 duration-150"
                href={`/dashboard/${p.id}/viewProject`}
              >
                Preview
              </Link>
              <Link
                className="hover:bg-primary px-4 py-1 duration-150"
                href="#"
              >
                Delete
              </Link>
            </div>
          )} */}
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
          <div className="h-20  w-20 md:h-[160px] md:w-[160px] rounded-full border-2 border-dark overflow-hidden ">
            <Image
              src="/images/profile_pic.png"
              alt="cover photo"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              loading="lazy"
            />
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
              ) : data && !projectData?.totalCount ? (
                <div className="my-16 flex flex-col items-center">
                  <h4 className="text-center md:text-xl mb-6">
                    Oops you don&apos;t have any project
                  </h4>
                  <Button
                    title="Add project"
                    css="w-full md:w-[145px]"
                    fn={gotoAddProject}
                  />
                </div>
              ) : (
                <div className="border border-primaryTransparent rounded-lg py-2  ">
                  <h3 className="p-5 pt-2">
                    {" "}
                    Project ({projectData?.totalCount || 0})
                  </h3>
                  <div className="border-t  border-primaryTransparent py-2  overflow-x-auto">
                    {
                      <table>
                        <thead className="border-b border-primaryTransparent ">
                          <tr>
                            <td className="">Name</td>
                            <td>Network</td>
                            <td>Wallet Address</td>
                            <td>Extension</td>
                            <td>Total Amount Generated</td>
                            <td>Total Token</td>
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
          {projectData?.projects?.data?.length > 0 && (
            <Pagination totalCount={projectData?.totalCount} />
          )}
        </section>
      </section>
    </>
  );
};

export default Page;
