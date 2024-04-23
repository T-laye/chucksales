"use client";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { useFormik, FormikErrors, FormikTouched } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn_validate } from "@/lib/validate";
import { AuthFormValues } from "@/types/Forms";
import { useRouter } from "next/navigation";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: signIn_validate,
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
        : ""
    }`;
  };

  return (
    <section>
      <h3 className="text-center my-8">Welcome back!</h3>
      <form onSubmit={formik.handleSubmit}>
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
        <div className="flex flex-col mb-4 relative">
          <label className="" htmlFor="password">
            Password
          </label>
          <div className="w-full relative">
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

        <div>
          <Button title="Sign in" css="w-full" loading={loading} />
        </div>
      </form>

      <div className="flex items-center mt-4 mb-2">
        <div className="h-[1px] flex-1  bg-white"></div>
        <div className="mx-4 text-xs md:text-base">or</div>
        <div className="h-[1px] flex-1  bg-white"></div>
      </div>

      <div>
        <button
          className={`py-2 px-[10px] lg:px-[20px] lg:h-11 hover:scale-[0.96] active:scale-[1.05] duration-150   rounded-lg text-sm lg:text-base min-w-24 lg:min-w-[120px] whitespace-nowrap font-sfReg bg-[#474d57] w-full h-10 flex justify-center items-center gap-2`}
        >
          <FcGoogle size={20} />{" "}
          <span className="inline-block">Continue with Google</span>
        </button>
      </div>

      <div className="mt-6">
        <p className="text-center text-xs md:text-base">
          {" "}
          Don&apos;t have an account ?{" "}
          <span className="text-primary">
            {" "}
            <Link href="/signUp">Sign up</Link>
          </span>{" "}
        </p>
      </div>
    </section>
  );
};

export default Page;
