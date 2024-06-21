"use client";
import Pagination from "@/components/Pagination";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { capitalize, formatDate } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const axiosAuth = useAxiosAuth();
  const router = useRouter();
  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const { order, take, pageNumber, search } = useSelector(
    (state: any) => state.variables
  );
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const selectedValue = event.target.value;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: selectedValue,
    }));

    if (selectedValue.startsWith("/")) {
      router.push(selectedValue);
    } else if (selectedValue === "approve") {
      handleApproveProject(id, "live", false);
      // console.log(id);
    } else if (selectedValue === "disable") {
      handleApproveProject(id, "disabled", false);
      // console.log(id);
    }
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["projects", order, pageNumber, take],
    queryFn: () =>
      axiosAuth.get(
        `/projects/general?order=desc&pageNumber=${pageNumber}&take=${take}`
      ),
  });
  const projectData = data?.data?.data?.projects?.data;
  const projectCount = data?.data?.data?.totalCount;

  // console.log(projectData);

  const {
    mutate,
    isPending,
    data: approvedData,
  } = useMutation({
    mutationFn: (data: { id: string; status: string; deleteP: boolean }) =>
      axiosAuth.patch(
        `/projects/admin/manage/status?projectId=${data.id}&status=${data.status}&delete=${data.deleteP}`
      ),
    onSuccess: (data) => {
      toast({ dispatch, message: "Successful" });
      queryClient.invalidateQueries({
        queryKey: ["projects", "generalProjects"],
      });
      // console.log(data); // Optional logging for debugging
    },
    onError: (error: any) => {
      if (error?.response?.status === 401) {
        toast({ dispatch, message: "Unauthenticated. Please Login." });
      } else {
        toast({ dispatch, message: "Failed to Approve Project." });
      }
      console.log(error); // Optional logging for debugging
    },
  });

  function handleApproveProject(id: string, status: string, deleteP: boolean) {
    mutate({ id, status, deleteP });
  }

  // console.log(approvedData);

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "text-primary border-b border-primary " : ""
    } whitespace-nowrap px-1 pb-4 duration-150 cursor-pointer  h-[28px] flex justify-center items-center text-sm sm:text-base md:text-xl`;
  };

  const renderProjects = () => {
    return projectData?.map((p: any) => (
      <tr key={p.id}>
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
            <span className="block">{capitalize(p.name)}</span>
          </div>
        </td>
        <td className="">{p.network}</td>
        <td className="">{p.wallet}</td>
        <td className="">{p.formattedTotalAmount}</td>
        <td>{p.totalToken}</td>
        <td>{p.totalTokenCirculation}</td>
        <td>{p.percentageCirculation}%</td>
        <td className=" ">{p.extension}</td>
        <td className="">{p.email}</td>
        <td className="">{formatDate(p.createdDate)}</td>
        <td className=" ">{p.status}</td>
        <td className="relative text-center flex justify-center h-full py-6 overflow-hidden w-fit px-0">
          <select
            key={p.id}
            className="bg-dark text-center focus:outline-none cursor-pointer"
            value={selectedOptions[p.id] || ""}
            onChange={(event) => handleSelectChange(event, p.id)}
          >
            <option className="bg-dark text-center" value="">
              Actions
            </option>
            <option
              className="bg-dark"
              value={`/chuckmin/projects/${p.id}/preview`}
            >
              Preview
            </option>
            {p.status === "disabled" ? (
              <option className="bg-dark" value="approve">
                Approve
              </option>
            ) : (
              <option className="bg-dark" value="disable">
                Disable
              </option>
            )}
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h2 className="text-primary text-3xl font-sfBold mb-7">Projects</h2>

      <div className="flex gap-3 sm:gap-6 flex-wrap">
        <div onClick={() => handleActiveTab(0)} className={tabStyle(0)}>
          All Projects
        </div>
        <div onClick={() => handleActiveTab(1)} className={tabStyle(1)}>
          Completed
        </div>

        <div onClick={() => handleActiveTab(2)} className={tabStyle(2)}>
          Pending
        </div>
        <div onClick={() => handleActiveTab(3)} className={tabStyle(3)}>
          Cancelled
        </div>
      </div>
      <div className="">
        <div className="border border-primaryTransparent rounded-lg  mt-10 overflow-auto ">
          <div className="py-2  ">
            {
              <table className="">
                <thead className="border-b border-primaryTransparent ">
                  <tr>
                    <td className="">Name</td>
                    <td>Network</td>
                    <td>Wallet Address</td>
                    <td>Total Amount Generated</td>
                    <td>Total Token</td>
                    <td>Total Circulation</td>
                    <td>Percentage Circulation</td>
                    <td>Extension</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Status</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>{renderProjects()}</tbody>
              </table>
            }
          </div>
        </div>
      </div>
      {projectData?.length > 0 && <Pagination totalCount={projectCount} />}
    </div>
  );
};

export default Page;
