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

const page = () => {
  return (
    <div className="pb-20">
      <section className="flex gap-5 mb-12 overflow-auto pb-5">
        <StatsCard
          stat="100"
          title="Contributors"
          icon={<ContributorsIcon />}
        />
        <StatsCard stat="50" title="Developers" icon={<DeveloperIcon />} />
        <StatsCard stat="600" title="Projects" icon={<ProjectStatsIcon />} />
        <StatsCard
          stat="$10k"
          title="Total"
          icon={<TotalContributions />}
          fill={true}
        />
      </section>
      <section className="min-h-[381px] bg-bue-400 mb-12 flex gap-5 flex-wrap lg:flex-nowrap items-center justify-center">
        <div className="  overflow-auto lg:w-full xl:w-2/3 pb-8 px-4 border-[3px] border-[#303A5C] py-3 rounded-xl">
          <div>
            <h2 className="text-4xl">Funding Report</h2>
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
        {/* Recent */}
        <div className="flex-1 border-[3px] border-[#303A5C] py-3 rounded-xl ">
          <div className="flex justify-between px-3 py-[10px] flex-wrap gap-2">
            <div>
              <h2>Recent Projects</h2>
              <p>The most recently listed projects</p>
            </div>
            <Button title="View all" />
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

        {/* Recent */}
        <div className="flex-1 border-[3px] border-[#303A5C] py-3 rounded-xl ">
          <div className="flex justify-between px-3 py-[10px] flex-wrap gap-2">
            <div>
              <h2>Recent Projects</h2>
              <p>The most recently listed projects</p>
            </div>
            <Button title="View all" />
          </div>
          {/* Row */}
          <div className="mt-3 overflow-auto">
            <div className="border-t border-primaryTransparent  flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mt-3">
            <div className="border-t border-primaryTransparent flex justify-between items-center px-5 py-2.5">
              <div className="text-primary flex gap-1">
                <RiCheckboxBlankCircleFill size={40} />
                <div className="flex flex-col ">
                  <h4 className="text-primary ">ETH ShitCoin</h4>
                  <p className="text-sm text-start text-[#7A7D9C] ">
                    by Edith Francis
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary border"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
                <div className="h-8 w-8 rounded-full bg-primary border -ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
