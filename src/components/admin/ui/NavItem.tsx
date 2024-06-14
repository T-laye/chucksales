"use client";
import Link from "next/link";
import React from "react";
import { DashIcon } from "../icons/DashIcon";
import { usePathname } from "next/navigation";

interface navItemProps {
  title?: string;
  link?: string;
  icon?: any;
}

export const NavItem: React.FC<navItemProps> = ({ title, link, icon }) => {
  const pathname = usePathname();

  return (
    <Link href={link || ""} className="">
      <li
        className={` ${
          pathname === link ? "bg-primary text-white" : "text-[#FFFFFFB2]"
        }  flex items-center gap-6  p-[10px] w-fit rounded-lg`}
      >
        <div>{icon}</div>
        <div className="lg:text-xl ">{title}</div>
      </li>
    </Link>
  );
};
