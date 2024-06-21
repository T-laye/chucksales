"use client";
import Pagination from "@/components/Pagination";
import { DevelopersIcon } from "@/components/admin/icons/DevelopersIcon";
import { StatsCard } from "@/components/admin/ui/StatsCard";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize, formatDate } from "@/utils/Helpers";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const { order, take, pageNumber } = useSelector(
    (state: any) => state.variables
  );
  const axiosAuth = useAxiosAuth();

  const { data, error } = useQuery({
    queryKey: ["count"],
    queryFn: () => axiosAuth.get(`/projects/admin/manage/count`),
  });

  const { data: usersData, error: userError } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axiosAuth.get(
        `/auth/admin/manage/getusers?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });

  const count = data?.data?.data;
  const users = usersData?.data?.data?.data;

  // console.log(users);
  // console.log(count);

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  const renderDevs = () => {
    return users?.map((p: any) => (
      <tr key={p.id}>
        <td>
          <div className="flex justify-start items-center gap-3 ">
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-customGrayLight overflow-hidden">
              {p?.profileImageUrl && (
                <Image
                  src={p?.profileImageUrl}
                  alt={p.name}
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="block">{p.name && capitalize(p.name)}</span>
          </div>
        </td>
        <td className="">{p.email}</td>
        <td className="">{p.status}</td>
        <td className="">{p.role}</td>
        <td>{p.createdDate && formatDate(p.createdDate)}</td>
        <td>{p.createdDate && formatDate(p.updatedDate)}</td>
        {/* <td>{p.deletedDate && formatDate(p.deletedDate)}</td> */}
        {/* <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
          <select
            className="bg-dark text-center focus:outline-none"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option className="bg-dark text-center" value="">
              Actions
            </option>
            <option
              className="bg-dark"
              value={`/dashboard/${p.id}/editProject`}
            >
              Edit
            </option>
            <option
              className="bg-dark"
              value={`/chuckmin/projects/${p.id}/preview`}
            >
              Preview
            </option>
            <option className="bg-dark" value="#">
              Delete
            </option>
          </select>{" "}
        </td> */}
      </tr>
    ));
  };

  return (
    <div className="pb-20">
      <h2 className="text-primary text-3xl font-sfBold mb-7">Developers</h2>
      <section className="flex gap-5 mb-12 overflow-auto pb-5">
        <StatsCard
          stat={count?.developers}
          title="Developers"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
        <StatsCard
          // stat="20"
          title="Active"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
        <StatsCard
          // stat="5"
          title="Disabled"
          icon={
            <div className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-primary">
              <DevelopersIcon />
            </div>
          }
        />
      </section>

      <div className="border border-primaryTransparent rounded-lg  mt-10 ">
        {/* <h3 className="p-5 pt-2"> Project ({projectCount || 0})</h3> */}
        <div className="py-2  overflow-x-auto">
          {
            <table>
              <thead className="border-b border-primaryTransparent ">
                <tr>
                  <td className="">Name</td>
                  <td>Email</td>
                  <td>Status</td>
                  <td>Role</td>
                  <td>Created At</td>
                  <td>Updated At</td>
                  {/* <td>Deleted At</td>
                  <td>Action</td> */}
                </tr>
              </thead>
              <tbody>{renderDevs()}</tbody>
            </table>
          }
        </div>
      </div>
      {users?.length > 0 && <Pagination totalCount={count?.developers} />}
    </div>
  );
};

export default Page;
