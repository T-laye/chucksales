"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize } from "@/utils/Helpers";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

export const Header = () => {
  const axiosAuth = useAxiosAuth();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axiosAuth.get(`/auth/dev/profile`),
  });
  const user = userData?.data?.data;
  console.log(user);

  return (
    <div className=" w-full lg:h-[10vh] px-10 py-6 flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-customGrayLightTRansparent cursor-pointer">
          <IoNotificationsOutline size={24} />
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-customGrayLight overflow-hidden">
          <Image
            src={user?.profileImageUrl}
            height={500}
            width={500}
            alt={user?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-[#FFFFFFB2]">
          <div className="text-lg">{user?.name && capitalize(user?.name)}</div>
          <div className="text-sm">
            {user?.email && capitalize(user?.email)}
          </div>
        </div>
      </div>
    </div>
  );
};
