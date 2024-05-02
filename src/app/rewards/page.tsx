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

  const getInputClassNames = (fieldName: keyof AuthFormValues): string => {
    return `${
      (Error as FormikErrors<AuthFormValues>)[fieldName] &&
      (Touch as FormikTouched<AuthFormValues>)[fieldName]
        ? "focus:border-error foucus:text-error"
        : "border-primaryTransparent "
    }`;
  };

  return (
    <>
      <Header />
      <section className="h-screen">
        <div className="section-container h-full  lg:flex lg:items-center">
          <div className="md:flex md:items-center md:bg-[#1F262E99] max-w-[1000px] h-[519px] md:mx-auto md:rounded-lg md:pl-[56px] md:mt-20 2xl:mt-0 ">
            <div className="mt-10 md:flex-1 md:flex md:flex-col justify-center">
              <h2 className="font-sfBold text-4xl sm:text-5xl lg:text-6xl">
                Coming Soon...
              </h2>
              <p className="text-sm mt-3 md:w-2/3 md:text-base md:mt-4">
                Subscribe to be the first to know about the events and rewards!
              </p>

              <form
                onSubmit={formik.handleSubmit}
                className="mt-6 md:flex items-end gap-3"
              >
                <div className="flex flex-col mb-4 md:mb-0 md:flex-1">
                  {/* <label className="" htmlFor="email">
                  Email
                </label> */}
                  <input
                    type="email"
                    placeholder="Please enter your email"
                    className={getInputClassNames("email")}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="form_errors">{formik.errors.email}</div>
                  )}
                </div>

                <div>
                  <Button
                    title="Notify me"
                    css="w-full bg-white text-black"
                    loading={loading}
                  />
                </div>
              </form>
            </div>

            <div className="flex-1">
              <div className="w-3/4 md:w-full md:p-6     mx-auto mt-8 md:mt-0">
                <Image
                  src="/images/coming_soon.png"
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
      <Footer />
    </>
  );
};

export default Page;
