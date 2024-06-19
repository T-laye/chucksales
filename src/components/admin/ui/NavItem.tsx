"use client";
import Link from "next/link";
import React from "react";
import { DashIcon } from "../icons/DashIcon";
import { usePathname } from "next/navigation";
import { handleAdminNav } from "@/redux/slices/variables";
import { useDispatch } from "react-redux";

interface navItemProps {
  title?: string;
  link?: string;
  active?: any;
  icon?: any;
}

export const NavItem: React.FC<navItemProps> = ({ title, link, icon, active }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const closeAdminNav = () => {
    dispatch(handleAdminNav(false));
  };

  return (
    <Link href={link || ""} className="">
      <li
        onClick={closeAdminNav}
        className={` ${
          pathname.includes(active)
            ? "bg-primary text-white"
            : "text-[#FFFFFFB2]"
        }  flex items-center gap-6  p-[10px] w-fit rounded-lg`}
      >
        <div>{icon}</div>
        <div className="lg:text-xl ">{title}</div>
      </li>
    </Link>
  );
};
