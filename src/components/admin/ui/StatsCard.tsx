"use client";
import React from "react";
import { ContributorsIcon } from "../icons/ContributorsIcon";

interface StatsCardProps {
  title?: string;
  stat?: string;
  icon?: any;
  fill?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  stat,
  title,
  icon,
  fill = false,
}) => {
  return (
    <div
      className={` ${
        fill ? "bg-primary text-[#FFFFFFB2]" : "text-primary"
      } flex justify-between p-5 rounded-lg border-2 border-primary w-full h-[88px] min-w-[200px] max-w-[265px]`}
    >
      <div className=" ">
        <div className="text-2xl font-sfBold ">{stat}</div>
        <div className="text-sm  ">{title}</div>
      </div>
      <div>{icon}</div>
    </div>
  );
};
