"use client";
import Pagination from "@/components/Pagination";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import axios from "@/config/axios";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { AuthFormValues } from "@/types/Forms";
import { capitalize } from "@/utils/Helpers";
import { useQuery } from "@tanstack/react-query";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const axiosAuth = useAxiosAuth();
  const { order, take, pageNumber } = useSelector(
    (state: any) => state.variables
  );
  // const user = auth?.user?.user;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["projects", order, pageNumber, take],
    queryFn: () =>
      axios.get(
        `/projects/general?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });
  const projectData = data?.data?.data;
  const errorCode = error?.message;

  console.log(projectData);

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: signIn_validate,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: AuthFormValues): void {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      //   router.push("/signUp/verification");
    }, 3000);
  }

  const gotoViewProject = (projectId: string) => {
    router.push(`/launchApp/${projectId}`);
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
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white"></div>
            <span className="block">{capitalize(p.name)}</span>
          </div>
        </td>
        <td className="">{p.email}</td>
        <td className="">{p.totalAmountGenerate}</td>
        <td>{p.totalToken}</td>
        <td>{p.status}</td>
        <td>
          <Button title="View project" fn={() => gotoViewProject(p.id)} />
        </td>
      </tr>
    ));
  };
  return (
    <>
      <Header />
      <section className="md:min-h-screen relative">
        <div className="absolute top-[15%] -right-[15%]  -z-0 hidden md:block ">
          <Image
            src="/images/big_glow.svg"
            height={500}
            width={500}
            alt="bg-glow"
            className="block"
          />
        </div>
        <div className="section-container ">
          <div className=" md:flex md:justify-between">
            <div className="mt-10 md:mt-0 md:flex-1 md:flex md:flex-col justify-center items-start">
              <h2 className="font-sfBold w-3/4 mx-auto md:text-3xl lg:text-4xl 2xl:text-6xl text-center md:mx-0 md:text-start">
                Enhance Liquidity Effortlessly with L2 Network Integration
              </h2>
              <p className="text-sm mt-3 mx-auto text-center w-4/5 md:text-base md:mt-4 md:mx-0 md:text-start">
                Unlock Seamless Liquidity Boosts with our L2
                Integration Solution
              </p>

              <div className="mt-6 ">
                <Button
                  title="Let's go!"
                  css="w-full md:w-[285px]"
                  loading={loading}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="w-10/12 max-w-[525px] 2xl:max-w-[600px] md:w-full md:p-6 mx-auto mt-10 md:mt-0">
                <Image
                  src="/images/block_chain.png"
                  alt="X Logo"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-10 md:justify-between gap-3">
              <div className="flex gap-1 ">
                <div onClick={() => handleActiveTab(0)} className={tabStyle(0)}>
                  All
                </div>
                <div onClick={() => handleActiveTab(1)} className={tabStyle(1)}>
                  Pending Contributions
                </div>

                <div onClick={() => handleActiveTab(2)} className={tabStyle(2)}>
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

            {isLoading ? (
              <Loading />
            ) : (
              <div className="border border-primaryTransparent rounded-lg py-2  ">
                <h3 className="p-5 pt-2">
                  {" "}
                  Project ({projectData?.totalCount || 0})
                </h3>
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
                      <td>
                        <Button title="View project" fn={gotoViewProject} />
                      </td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {data && <Pagination totalCount={projectData?.totalCount} />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
