"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { AuthFormValues } from "@/types/Forms";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { toast } from "@/utils/Toast";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/ui/Loading";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { update_validate } from "@/lib/validations/authValidate";

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const { auth, pending } = useSelector((state: any) => state.auth);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const axiosAuth = useAxiosAuth();
  const router = useRouter();

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      oldPassword: "",
      password: "",
      file: null,
    },
    validate: update_validate,
    onSubmit: handleSubmit,
  });

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axiosAuth.get(`/auth/dev/profile`),
  });
  const user = userData?.data?.data;

  const {
    mutate: mutateImage,
    isPending: uploading,
    data: image,
  } = useMutation({
    mutationFn: (data: any) =>
      axiosAuth.post("/auth/profile/photo", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      toast({ dispatch, message: "Successfully Uploaded" });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error: any) => {
      if (error?.message === "Request failed with status code 401") {
        router.replace("/signIn");
        toast({ dispatch, message: "Unauthenticated Please Login" });
      } else if (error?.message === "Request failed with status code 500") {
        toast({ dispatch, message: "Server Error" });
      } else {
        toast({ dispatch, message: "Failed to upload" });
      }
    },
  });

  const { mutate: mutateName, isPending } = useMutation({
    mutationFn: (data: any) =>
      axiosAuth.patch(`/auth/account/update?name=${formik.values.fullName}`),
    onSuccess: (data: any) => {
      toast({ dispatch, message: "Successfully Updated" });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      // console.log(data);
    },
    onError: (error: any) => {
      if (error?.message === "Request failed with status code 401") {
        router.replace("/signIn");
        toast({ dispatch, message: "Unauthenticated Please Login" });
      } else if (error?.message === "Request failed with status code 500") {
        toast({ dispatch, message: "Server Error" });
      } else {
        toast({ dispatch, message: "Failed to update" });
      }
      // console.log(error);
    },
  });
  const { mutate: mutatePassword, isPending: passwordPending } = useMutation({
    mutationFn: (data: any) =>
      axiosAuth.patch(
        `/auth/account/update?oldPassword=${formik.values.oldPassword}&password=${formik.values.password}`
      ),
    onSuccess: (data: any) => {
      toast({ dispatch, message: "Successfully Updated" });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      console.log(data);
    },
    onError: (error: any) => {
      if (error?.message === "Request failed with status code 401") {
        router.replace("/signIn");
        toast({ dispatch, message: "Unauthenticated Please Login" });
      } else if (error?.message === "Request failed with status code 500") {
        toast({ dispatch, message: "Server Error" });
      } else {
        toast({ dispatch, message: "Failed to update" });
      }
      console.log(error);
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        fullName: user?.name || "",
        email: user?.email || "",
        oldPassword: undefined,
        password: undefined,
        file: null,
      });
      setPreview(user?.profileImageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function handleSubmit(values: AuthFormValues): Promise<void> {
    if (values.password && values.oldPassword) {
      mutatePassword(values);
    } else if (values.fullName && !values.password && !values.oldPassword) {
      mutateName(values);
    } else {
      mutatePassword(values);
      mutateName(values);
    }
  }

  function handleImageUpload() {
    const formData = new FormData();
    if (formik?.values?.file) {
      formData.append("file", formik?.values?.file);
    }
    mutateImage(formData);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
        reader.readAsDataURL(file);
      }
    } else {
      setPreview(null);
      formik.setFieldValue("file", null);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  return (
    <section className="container mx-auto px-4 md:px-8">
      {pending && !auth?.user ? (
        <div className="mt-36">
          <Loading />
        </div>
      ) : (
        <div className="mt-5 md:bg-[#1C1B2099] md:rounded-2xl md:p-10 w-full max-w-[590px] mx-auto">
          <h2 className="font-bold md:text-center">Edit Profile</h2>

          <div>
            <div className="">
              <label htmlFor="logo">Profile Picture</label>
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
            {formik.values.file && (
              <div className="flex justify-center">
                <Button
                  title="Upload"
                  css="mt-2"
                  loading={uploading}
                  type="button"
                  fn={handleImageUpload}
                />
              </div>
            )}
          </div>

          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="fullName">
                Full Name
              </label>
              <input type="text" {...formik.getFieldProps("fullName")} />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="form_errors">{formik.errors.fullName}</div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                readOnly
                disabled
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="form_errors">{formik.errors.email}</div>
              )}
            </div>
            <div className="flex flex-col my-4">
              <label className="" htmlFor="oldPassword">
                Old Password
              </label>
              <div className="relative">
                <input
                  type={showOldPassword ? "text" : "password"}
                  {...formik.getFieldProps("oldPassword")}
                />
                {formik.touched.oldPassword && formik.errors.oldPassword && (
                  <div className="form_errors">{formik.errors.oldPassword}</div>
                )}
                {!showOldPassword ? (
                  <RiEyeCloseLine
                    onClick={handleShowOldPassword}
                    size={20}
                    className="absolute right-3 top-5 cursor-pointer transition-all"
                  />
                ) : (
                  <IoEyeOutline
                    onClick={handleShowOldPassword}
                    size={20}
                    className="absolute right-3 top-5 cursor-pointer transition-all"
                  />
                )}
              </div>
            </div>
            <div className="w-full">
              <label className="" htmlFor="password">
                New Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
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
              <Button
                title="Update Profile"
                css="w-full mt-4"
                loading={isPending || passwordPending}
                type="submit"
              />
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Page;
