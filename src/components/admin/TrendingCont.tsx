"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const TrendingCont = () => {
  const axiosAuth = useAxiosAuth();

  const { data, error } = useQuery({
    queryKey: ["trendingProjects"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/trending`),
  });

  // console.log(data);
//   console.log(error);

  return (
    <div className="flex-1 border-[3px] border-[#303A5C] py-3 rounded-xl ">
      <div className="flex justify-between px-3 py-[10px] flex-wrap gap-2">
        <div>
          <h2>Trending Projects</h2>
          <p>The most recently listed projects</p>
        </div>
        {/* <Button title="View all" fn={gotoProjects} /> */}
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
  );
};

export default TrendingCont;
