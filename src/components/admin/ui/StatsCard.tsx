"use client";
import Link from "next/link";
import React from "react";
import { DashIcon } from "../icons/DashIcon";
import { usePathname } from "next/navigation";

interface navItemProps {
  title?: string;
  stat?: string;
  icon?: any;
}

export const NavItem: React.FC<navItemProps> = ({ stat, title, icon }) => {
  return (
    <div>
      <div>{icon}</div>
      <div className="lg:text-xl ">{title}</div>
    </div>
  );
};
