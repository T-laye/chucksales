"use client";
import Button from "@/components/ui/Button";
import project_validation from "@/lib/validations/ProjectValidate";
import { AuthFormValues, ProjectFormValues } from "@/types/Forms";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  const formik = useFormik<ProjectFormValues>({
    initialValues: {
      name: "",
      description: "",
      logo: "",
      email: "",
      wallet: "",
      twitter: "",
      discord: "",
      telegram: "",
      website: "",
    },
    validationSchema: project_validation,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: ProjectFormValues): void {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 3000);
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader: any = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        console.log(typeof reader.result);
        formik.setFieldValue("logo", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-8">
      <div className="mt-5 md:bg-[#1C1B2099] md:rounded-2xl md:p-10 w-full max-w-[590px] mx-auto">
        <h2 className="font-bold md:text-center ">Add Project</h2>

        <form className="mt-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="" htmlFor="name">
              Project Name
            </label>
            <input
              type="text"
              //   className={getInputClassNames("name")}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="form_errors">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="" htmlFor="description">
              Project Description
            </label>
            <textarea
              //   className={getInputClassNames("description")}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="form_errors">{formik.errors.description}</div>
            )}
          </div>

          {/* Logo Upload */}
          <div className="mb-4">
            <label className="" htmlFor="logo">
              Projec Logo
            </label>
            <label
              htmlFor="logo"
              className="block border border-dashed md:border-solid border-input overflow-hidden md:h-[156px] md:p-6 h-[154px] rounded-2xl mt-2 md:flex md:items-center gap-4"
            >
              <div className="md:border md:border-dashed md:rounded-2xl md:w-[108px] md:h-[108px] h-full w-full flex flex-col gap-3 justify-center items-center cursor-pointer overflow-hidden">
                {!preview ? (
                  <div>
                    <div>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25V5.75ZM13 4.25C12.5858 4.25 12.25 4.58579 12.25 5C12.25 5.41421 12.5858 5.75 13 5.75V4.25ZM17.75 1C17.75 0.585786 17.4142 0.25 17 0.25C16.5858 0.25 16.25 0.585786 16.25 1H17.75ZM16.25 9C16.25 9.41421 16.5858 9.75 17 9.75C17.4142 9.75 17.75 9.41421 17.75 9H16.25ZM21 4.25H17V5.75H21V4.25ZM17 4.25H13V5.75H17V4.25ZM16.25 1V5H17.75V1H16.25ZM16.25 5V9H17.75V5H16.25Z"
                          fill="#688CEC"
                        />
                        <path
                          d="M10.5 2C6.02166 2 3.78249 2 2.39124 3.39124C1 4.78249 1 7.02166 1 11.5C1 15.9783 1 18.2175 2.39124 19.6088C3.78249 21 6.02166 21 10.5 21C14.9783 21 17.2175 21 18.6088 19.6088C20 18.2175 20 15.9783 20 11.5V11"
                          stroke="#688CEC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 20C8.20998 15.2487 12.9412 8.9475 20 13.6734"
                          stroke="#688CEC"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="md:hidden">
                      <p className="text-center">
                        Recommended size: 350px x 350px. <br /> JPG, JPEG, PNG,
                        SVG or GIF{" "}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full overflow-hidden">
                    <Image
                      src={preview}
                      alt="preview"
                      height={500}
                      width={500}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
              <input
                type="file"
                className="hidden"
                id="logo"
                onChange={handleImageChange}
              />
              <div className="hidden md:block ">
                <p className=" text-lg">
                  Recommended size: 350px x 350px. <br /> JPG, JPEG, PNG, SVG or
                  GIF{" "}
                </p>
              </div>
            </label>
            {formik.touched.logo && formik.errors.logo && (
              <div className="form_errors">{formik.errors.logo}</div>
            )}
          </div>
          {/*  */}
          <div className="md:grid md:grid-cols-2 md:gap-5 ">
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                //   className={getInputClassNames("email")}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="form_errors">{formik.errors.email}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="wallet">
                Wallet Address
              </label>
              <input
                type="wallet"
                //   className={getInputClassNames("wallet")}
                {...formik.getFieldProps("wallet")}
              />
              {formik.touched.wallet && formik.errors.wallet && (
                <div className="form_errors">{formik.errors.wallet}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="twitter">
                Twitter Page Link
              </label>
              <input
                type="twitter"
                //   className={getInputClassNames("twitter")}
                {...formik.getFieldProps("twitter")}
              />
              {formik.touched.twitter && formik.errors.twitter && (
                <div className="form_errors">{formik.errors.twitter}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="discord">
                Discord Server Link
              </label>
              <input
                type="discord"
                //   className={getInputClassNames("discord")}
                {...formik.getFieldProps("discord")}
              />
              {formik.touched.discord && formik.errors.discord && (
                <div className="form_errors">{formik.errors.discord}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="telegram">
                Telegram Group Link
              </label>
              <input
                type="telegram"
                //   className={getInputClassNames("telegram")}
                {...formik.getFieldProps("telegram")}
              />
              {formik.touched.telegram && formik.errors.telegram && (
                <div className="form_errors">{formik.errors.telegram}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="website">
                Website Link
              </label>
              <input
                type="website"
                //   className={getInputClassNames("website")}
                {...formik.getFieldProps("website")}
              />
              {formik.touched.website && formik.errors.website && (
                <div className="form_errors">{formik.errors.website}</div>
              )}
            </div>
          </div>

          <div>
            <Button
              title="Submit Project"
              css="w-full mt-4"
              loading={loading}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
