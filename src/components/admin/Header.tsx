"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import Logo from "../ui/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { handleAdminNav } from "@/redux/slices/variables";

export const Header = () => {
  const axiosAuth = useAxiosAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  const openAdminNav = () => {
    dispatch(handleAdminNav(true));
  };

  const {
    data: userData,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axiosAuth.get(`/auth/dev/profile`),
  });
  const user = userData?.data?.data;
  //   console.log(user);

  const errorCode = error?.message;

  if (isError) {
    if (errorCode === "Request failed with status code 401") {
      router.replace("/signIn");
      console.log(error);
      toast({ dispatch, message: "Unauthorized Please Login" });
    } else {
      toast({ dispatch, message: "Something went wrong!!!" });
    }
  }

  return (
    <div className="fixed lg:static bg-dark w-full lg:h-[10vh] lg:px-10 lg:py-6 px-4 py-4 flex items-center justify-between">
      <div className="lg:block hidden"></div>
      <div className="lg:hidden">
        {" "}
        <Logo />
      </div>
      <div className="lg:flex items-center gap-4 hidden ">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-customGrayLightTRansparent cursor-pointer">
          <IoNotificationsOutline size={24} />
        </div>
        {user?.profileImageUrl && (
          <div className="w-[50px] h-[50px] rounded-full bg-customGrayLight overflow-hidden">
            <Image
              src={user?.profileImageUrl}
              height={500}
              width={500}
              alt={user?.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="text-[#FFFFFFB2]">
          <div className="text-lg">{user?.name && capitalize(user?.name)}</div>
          <div className="text-sm">
            {user?.email && capitalize(user?.email)}
          </div>
        </div>
      </div>
      <div className="lg:hidden  ">
        <HiOutlineMenuAlt3
          size={28}
          className="cursor-pointer"
          onClick={openAdminNav}
        />
      </div>
    </div>
  );
};
