"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Button from "../ui/Button";
import { capitalize } from "@/utils/Helpers";
import Image from "next/image";

const TrendingCont = () => {
  const axiosAuth = useAxiosAuth();
  const router = useRouter();

  const { data, error } = useQuery({
    queryKey: ["trendingProjects"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/trending`),
  });

  const trends = data?.data?.data;
  console.log(trends);
  //   console.log(error);

  const gotoProjects = () => {
    router.push("/chuckmin/projects");
  };

  const renderProjects = () => {
    return trends?.map((p: any) => (
      <tr
        key={p.id}
        className="border-t border-primaryTransparent px-5 py-2.5 "
      >
        <td>
          <div className="flex justify-start items-center gap-3 ">
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white overflow-hidden">
              {p?.projectImageUrl && (
                <Image
                  src={p?.projectImageUrl}
                  alt={p.name}
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="block">{p.projectName && capitalize(p.projectName)}</span>
          </div>
        </td>
        <td className="">{p.wallet.chainNetwork}</td>
        <td
          className={` ${
            p.status === "disabled" ? "text-error" : "text-success"
          } flex items-center justify-center gap-1`}
        >
          <RiCheckboxBlankCircleFill size={24} />
          <span className="inline-block">{p.status}</span>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex-1 border-[3px] border-[#303A5C] py-3 rounded-xl h-fit ">
      <div className="flex justify-between px-3 py-[10px] flex-wrap gap-2">
        <div>
          <h2>Trending Projects</h2>
          <p>The most recently listed projects</p>
        </div>
        <Button title="View all" fn={gotoProjects} />
      </div>
      {/* Row */}

      <div className="mt-3 overflow-auto">
        <table>
          <thead className=" border-t border-primaryTransparent px-5 py-2.5 ">
            <tr>
              <td className="">Project</td>
              <td>Network</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>{renderProjects()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingCont;
