"use client";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Button from "@/components/ui/Button";
import { AuthFormValues } from "@/types/Forms";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "bg-customGray " : ""
    } whitespace-nowrap p-[10px] duration-150 cursor-pointer  rounded-lg h-[28px] flex justify-center items-center text-xs`;
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
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
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

            <div className="flex flex-col mb-4 md:mb-0 md:flex-1">
              <input
                type="text"
                placeholder="Search"
                className="border-primary placeholder:text-sm"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
