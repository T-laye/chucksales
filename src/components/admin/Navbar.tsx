"use client";
import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import { NavItem } from "./ui/NavItem";
import { DashIcon } from "./icons/DashIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { DevelopersIcon } from "./icons/DevelopersIcon";
import { UserIcon } from "./icons/UserIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { HiOutlineLogout } from "react-icons/hi";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "@/utils/Toast";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { handleAdminNav } from "@/redux/slices/variables";

export const Navbar = () => {
  const axiosAuth = useAxiosAuth();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { adminNav } = useSelector((state: any) => state.variables);

  // console.log(adminNav);

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn: (data: any) => axiosAuth.post("/auth/logout"),
    onSuccess: (data) => {
      sessionStorage.clear();
      queryClient.clear();
      router.push("/signIn");
      toast({ dispatch, message: "Successfully Logged out" });
    },
    onError: (error: any) => {
      toast({ dispatch, message: "Something went wrong" });
    },
  });

  const closeAdminNav = () => {
    dispatch(handleAdminNav(false));
  };

  return (
    <div
      className={`  ${
        adminNav ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
      } fixed duration-150 bg-dark top-0 left-0 right-0 py-10 px-5 lg:min-w-[240px] lg:px-5 lg:py-14 lg:flex lg:flex-col lg:gap-16 lg:static z-[1000]`}
    >
      <div className="mb-10 lg:mb-0 flex lg:block justify-between">
        <Logo />
        <IoMdClose
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={closeAdminNav}
        />
      </div>
      <nav className="flex flex-col h-full justify-between">
        <ul className="lg:flex flex-col lg:gap-4 gap-6 ">
          <NavItem
            active="/chuckmin/dashboard"
            link="/chuckmin/dashboard"
            title="Dashboard"
            icon={<DashIcon />}
          />
          <NavItem
            active="/chuckmin/projects"
            link="/chuckmin/projects"
            title="Projects"
            icon={<ProjectIcon />}
          />
          <NavItem
            active="/chuckmin/developers"
            link="/chuckmin/developers"
            title="Developers"
            icon={<DevelopersIcon />}
          />
          <NavItem
            active="/chuckmin/contributors"
            link="/chuckmin/contributors"
            title="Contributors"
            icon={<UserIcon />}
          />
          <NavItem
            active="/chuckmin/account"
            link="/chuckmin/account"
            title="Account"
            icon={<SettingsIcon />}
          />
        </ul>

        <div
          onClick={mutate}
          className="text-[#FFFFFFB2] flex gap-6 hover:text-error duration-150 cursor-pointer px-2 mt-2 lg:mt-0 lg:px-0"
        >
          <HiOutlineLogout size={24} className="rotate-180" />
          <div>Logout</div>
        </div>
      </nav>
    </div>
  );
};
