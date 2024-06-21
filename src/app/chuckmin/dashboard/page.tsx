"use client";
import { ContributorsIcon } from "@/components/admin/icons/ContributorsIcon";
import { DeveloperIcon } from "@/components/admin/icons/DeveloperIcon";
import { ProjectStatsIcon } from "@/components/admin/icons/ProjectStatsIcon";
import { TotalContributions } from "@/components/admin/icons/TotalContributions";
import { StatsCard } from "@/components/admin/ui/StatsCard";
import Button from "@/components/ui/Button";
import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import PieChart from "@/components/admin/PieChart";
import BarChart from "@/components/admin/BarChart";
import { useRouter } from "next/navigation";
import RecentCont from "@/components/admin/RecentCont";
import TrendingCont from "@/components/admin/TrendingCont";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const axiosAuth = useAxiosAuth();
 

  const gotoProjects = () => {
    router.push("/chuckmin/projects");
  };

  const { data } = useQuery({
    queryKey: ["count"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/count`),
  });

  const { data: total } = useQuery({
    queryKey: ["total"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/total-amount`),
  });

  const count = data?.data?.data;
  const totalAmount = total?.data?.data || 0;

  
  // console.log(totalAmount);

  return (
    <div className="pb-20">
      <section className="flex gap-5 mb-12 overflow-auto pb-5">
        <StatsCard
          stat={count?.contributors}
          title="Contributors"
          icon={<ContributorsIcon />}
        />
        <StatsCard
          stat={count?.developers}
          title="Developers"
          icon={<DeveloperIcon />}
        />
        <StatsCard
          stat={count?.projects}
          title="Projects"
          icon={<ProjectStatsIcon />}
        />
        <StatsCard
          stat={totalAmount}
          title="Total"
          icon={<TotalContributions />}
          fill={true}
        />
      </section>
      <section className="min-h-[381px] bg-bue-400 mb-12 flex gap-5 flex-wrap lg:flex-nowrap items-center justify-center">
        <div className="  overflow-auto lg:w-full xl:w-2/3 pb-8 px-4 border-[3px] border-[#303A5C] py-3 rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl">Funding Report</h2>
            <div>
              {/* <input type="date" name="" id="" /> */}
            </div>
          </div>
          <div className="lg:min-h-[300px] min-w-[500px]  ">
            <BarChart />
          </div>
          <div className="mt-4">
            <h4>Total Contributions</h4>
            <h2 className="text-4xl font-sfBold">
              120,000 <span className="text-sm font-sfReg ">ETH</span>
            </h2>
          </div>
        </div>
        <div className="min-h-[300px] flex-1  border-[3px] border-[#303A5C] py-3 rounded-xl flex justify-center flex-col items-center">
          <h2 className="text-center mb-4">Project Analysis</h2>
          <div className="w-[300px] h-[300px]">
            <PieChart />
          </div>
        </div>
      </section>
      <section className="min-h-[501px]  flex flex-col lg:flex-row lg:gap-5 gap-10">
        <RecentCont />
        <TrendingCont />
      </section>
    </div>
  );
};

export default Page;
