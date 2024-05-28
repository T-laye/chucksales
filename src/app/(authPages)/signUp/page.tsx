"use client";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { useFormik, FormikErrors, FormikTouched } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthFormValues } from "@/types/Forms";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";
import { signUp_validate } from "@/lib/validations/authValidate";
import { handleSignUp } from "@/services/user";
import axios from "@/config/axios";
import { useDispatch, useSelector } from "react-redux";

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const { pending } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validate: signUp_validate,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: AuthFormValues): void {
    handleSignUp({ axios, dispatch, router, values });
  }

  const getInputClassNames = (fieldName: keyof AuthFormValues): string => {
    return `${
      (Error as FormikErrors<AuthFormValues>)[fieldName] &&
      (Touch as FormikTouched<AuthFormValues>)[fieldName]
        ? "focus:border-error foucus:text-error"
        : ""
    }`;
  };

  return (
    <section>
      <h3 className="text-center my-8">Create an account</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            className={getInputClassNames("fullName")}
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="form_errors">{formik.errors.fullName}</div>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className={getInputClassNames("email")}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="form_errors">{formik.errors.email}</div>
          )}
        </div>
        <div className="w-full">
          <label className="" htmlFor="password">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className={getInputClassNames("password")}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="form_errors">{formik.errors.password}</div>
            )}
            {!showPassword ? (
              <RiEyeCloseLine
                onClick={handleShowPassword}
                size={20}
                className="absolute right-3 top-5 cursor-pointer transition-all"
              />
            ) : (
              <IoEyeOutline
                onClick={handleShowPassword}
                size={20}
                className="absolute right-3 top-5 cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col my-4">
          <label className="" htmlFor="cPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showCPassword ? "text" : "password"}
              className={getInputClassNames("cPassword")}
              {...formik.getFieldProps("cPassword")}
            />
            {formik.touched.cPassword && formik.errors.cPassword && (
              <div className="form_errors">{formik.errors.cPassword}</div>
            )}
            {!showCPassword ? (
              <RiEyeCloseLine
                onClick={handleShowCPassword}
                size={20}
                className="absolute right-3 top-5 cursor-pointer transition-all"
              />
            ) : (
              <IoEyeOutline
                onClick={handleShowCPassword}
                size={20}
                className="absolute right-3 top-5 cursor-pointer transition-all"
              />
            )}
          </div>
        </div>

        <div>
          <Button
            title="Sign up"
            css="w-full"
            loading={pending}
            type="submit"
          />
        </div>
      </form>

      {/* <div className="flex items-center mt-4 mb-2">
        <div className="h-[1px] flex-1  bg-white"></div>
        <div className="mx-4 text-xs">or</div>
        <div className="h-[1px] flex-1  bg-white"></div>
      </div>

      <div>
        <button
          className={`py-2 px-[10px] lg:px-[20px] lg:h-11 hover:scale-[0.96] active:scale-[1.05] duration-150   rounded-lg text-sm lg:text-base min-w-24 lg:min-w-[120px] whitespace-nowrap font-sfReg bg-[#474d57] w-full h-10 flex justify-center items-center gap-2`}
        >
          <FcGoogle size={20} />{" "}
          <span className="inline-block">Continue with Google</span>
        </button>
      </div> */}

      <div className="mt-6">
        <p className="text-center text-xs md:text-base">
          {" "}
          Already have an account ?{" "}
          <span className="text-primary">
            {" "}
            <Link href="/signIn">Sign in</Link>
          </span>{" "}
        </p>
      </div>
    </section>
  );
};

export default Page;
