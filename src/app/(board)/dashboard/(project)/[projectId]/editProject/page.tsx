"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import project_validation from "@/lib/validations/ProjectValidate";
import { ProjectFormValues } from "@/types/Forms";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "@/services/project";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { toast } from "@/utils/Toast";
import { useDispatch } from "react-redux";
import { projectId } from "@/config";

const Page = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const axiosAuth = useAxiosAuth();
  const router = useRouter();
  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    mutationFn: (data: any) =>
      axiosAuth.post("/projects/edit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      toast({ dispatch, message: "Successfully Created" });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      router.back();
      console.log(data);
    },

    onError: (error: any) => {
      toast({ dispatch, message: "Failed to Create" });
      console.log(error);
    },
  });

  const formik = useFormik<ProjectFormValues>({
    initialValues: {
      name: "",
      description: "",
      file: undefined,
      email: "",
      wallet: "",
      twitter: "",
      discord: "",
      telegram: "",
      website: "",
      percentageCirculation: 0,
      totalTokenCirculation: 0,
      extension: ".",
    },
    // validationSchema: project_validation,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: ProjectFormValues): Promise<void> {
    console.log(values);
    const {
      name,
      description,
      file,
      email,
      wallet,
      twitter,
      discord,
      telegram,
      website,
      percentageCirculation,
      totalTokenCirculation,
      extension,
    } = values;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("file", file);
    console.log(file, "the file here");
    formData.append("walletAddress", wallet);
    formData.append("twitterLink", twitter);
    formData.append("discordLink", discord);
    formData.append("telegram", telegram);
    formData.append("website", website);
    // Convert numeric values to strings before appending
    formData.append("percentageCirculation", String(percentageCirculation));
    formData.append("totalTokenCirculation", String(totalTokenCirculation));
    formData.append("extension", extension);
    formData.append("projectId", String(projectId));

    // mutate({
    //   name,
    //   description,
    //   file,
    //   email,
    //   walletAddress: wallet,
    //   twitterLink: twitter,
    //   discordLink: discord,
    //   telegram,
    //   website,
    //   percentageCirculation,
    //   totalTokenCirculation,
    //   extension,
    // });
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("first", file);
    if (file) {
      console.log("if file", file);
      if (file.size > 1 * 1024 * 1024) {
        setImageError("Must be less than 5mb");
      } else if (
        !["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      ) {
        setImageError("Invalid file format");
      } else {
        setImageError(""); // Clear any previous error
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result as string);
          formik.setFieldValue("file", file);
        };
        console.log("Else state", file);
        reader.readAsDataURL(file);
      }
    } else {
      setPreview(null);
      formik.setFieldValue("file", null);
    }
  };
  // console.log("hello");
  return (
    <section className="container mx-auto px-4 md:px-8">
      <div className="mt-5 md:bg-[#1C1B2099] md:rounded-2xl md:p-10 w-full max-w-[590px] mx-auto">
        <h2 className="font-bold md:text-center">Add Project</h2>

        <form className="mt-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Project Name</label>
            <input type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name && (
              <div className="form_errors">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description">Project Description</label>
            <textarea {...formik.getFieldProps("description")} />
            {formik.touched.description && formik.errors.description && (
              <div className="form_errors">{formik.errors.description}</div>
            )}
          </div>

          {/* Logo Upload */}
          <div className="mb-4">
            <label htmlFor="logo">Project Logo</label>
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
                        Recommended size: below 5mb. <br /> JPG, JPEG, PNG.
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
              <div className="hidden md:block">
                <p className="text-lg">
                  Recommended size: Below 5mb. <br /> JPG, JPEG, PNG.
                </p>
              </div>
            </label>
            {imageError && <div className="form_errors">{imageError}</div>}
          </div>

          {/* Other form fields */}
          <div className="md:grid md:grid-cols-2 md:gap-5">
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email Address</label>
              <input type="email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && (
                <div className="form_errors">{formik.errors.email}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="wallet">Wallet Address</label>
              <input type="text" {...formik.getFieldProps("wallet")} />
              {formik.touched.wallet && formik.errors.wallet && (
                <div className="form_errors">{formik.errors.wallet}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="twitter">Twitter Page Link</label>
              <input type="text" {...formik.getFieldProps("twitter")} />
              {formik.touched.twitter && formik.errors.twitter && (
                <div className="form_errors">{formik.errors.twitter}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="discord">Discord Server Link</label>
              <input type="text" {...formik.getFieldProps("discord")} />
              {formik.touched.discord && formik.errors.discord && (
                <div className="form_errors">{formik.errors.discord}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="telegram">Telegram Group Link</label>
              <input type="text" {...formik.getFieldProps("telegram")} />
              {formik.touched.telegram && formik.errors.telegram && (
                <div className="form_errors">{formik.errors.telegram}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="website">Website Link</label>
              <input type="text" {...formik.getFieldProps("website")} />
              {formik.touched.website && formik.errors.website && (
                <div className="form_errors">{formik.errors.website}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="website">Percentage Circulation</label>
              <input
                type="number"
                {...formik.getFieldProps("percentageCirculation")}
              />
              {formik.touched.percentageCirculation &&
                formik.errors.percentageCirculation && (
                  <div className="form_errors">
                    {formik.errors.percentageCirculation}
                  </div>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="website">Total Token Circulation</label>
              <input
                type="number"
                {...formik.getFieldProps("totalTokenCirculation")}
              />
              {formik.touched.totalTokenCirculation &&
                formik.errors.totalTokenCirculation && (
                  <div className="form_errors">
                    {formik.errors.totalTokenCirculation}
                  </div>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="website">Extension</label>
              <input type="text" {...formik.getFieldProps("extension")} />
              {formik.touched.extension && formik.errors.extension && (
                <div className="form_errors">{formik.errors.extension}</div>
              )}
            </div>
          </div>

          <div>
            <Button
              title="Submit Project"
              css="w-full mt-4"
              loading={isPending}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
