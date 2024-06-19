'use client'
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const RecentCont = () => {
  const axiosAuth = useAxiosAuth();

  const { data } = useQuery({
    queryKey: ["recentProjects"],
    queryFn: () => axiosAuth.get(`/auth/dev/profile`),
  });
//   const user = userData?.data?.data;


  return (
    <div className="flex-1 border-[3px] border-[#303A5C] py-3 rounded-xl ">
      <div className="flex justify-between px-3 py-[10px] flex-wrap gap-2">
        <div>
          <h2>Recent Projects</h2>
          <p>The most recently listed projects</p>
        </div>
        {/* <Button title="View all" fn={gotoProjects} /> */}
      </div>

      <div className="mt-3 overflow-auto">
        <table>
          <thead className=" border-t border-primaryTransparent px-5 py-2.5 ">
            <tr>
              <td className="">Project</td>
              <td>Developer</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
            {/* Rows */}
            <tr className="border-t border-primaryTransparent px-5 py-2.5 ">
              <td>Justice league</td>
              <td className="">ETH Shitcoin</td>
              <td className="text-error flex items-center justify-center gap-1">
                <RiCheckboxBlankCircleFill size={24} />
                <span className="inline-block">In Progress</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCont;
