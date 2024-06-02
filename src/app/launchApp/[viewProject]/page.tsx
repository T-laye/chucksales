"use client";
import Pagination from "@/components/Pagination";
import Header from "@/components/landingPage/Header";
import CongratsModal from "@/components/modals/CongratsModal";
import ContributeModal from "@/components/modals/ContributeModal";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import {
  handleCongratsModal,
  handleContributeModal,
} from "@/redux/slices/variables";
import { capitalize, formatDate } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useQuery } from "@tanstack/react-query";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useChains,
} from "wagmi";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { viewProject: projectId } = useParams();
  const axiosAuth = useAxiosAuth();
  const { order, take, pageNumber } = useSelector(
    (state: any) => state.variables
  );

  const { data } = useWaitForTransactionReceipt({
    hash: "0x74ce58aeb5423702fd4a999b2d73ecec0d9aeb0961e58184fae427f5c3012b90",
  });

  // console.log(data)

  const { data: project, error: projectError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => axiosAuth.get(`/projects/user/${projectId}`),
  });

  const {
    data: contributors,
    isLoading,
    // error,
    isError,
  } = useQuery({
    queryKey: ["contributors"],
    queryFn: () =>
      axiosAuth.get(
        `/projects/user/contributors/${projectId}?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });

  const projectData = project?.data?.data;
  const contibutorsData = contributors?.data?.data?.contributors;
  const errorCode = projectError?.message;

  
  const { open, close } = useWeb3Modal();
  const {
    data: hash,
    sendTransaction,
    isPending,
    error,
    isSuccess,
  } = useSendTransaction();

  // const {
  //   isLoading: isConfirming,
  //   isSuccess: isConfirmed,
  //   data,
  // } = useWaitForTransactionReceipt({
  //   hash,
  // });
  const { address, connector, isConnected, isConnecting } = useAccount();
  const { showContributeModal, showCongratsModal, transactionData } =
    useSelector((state: any) => state.variables);

  // console.log(transactionData);

  const handleOpenContributeModal = () => {
    if (!isConnected) {
      open();
    } else {
      dispatch(handleContributeModal(true));
      // dispatch(handleCongratsModal(false));
    }
  };

  const handleOpenCongratsModal = () => {
    dispatch(handleCongratsModal(true));
    dispatch(handleContributeModal(false));
  };

  const renderContributors = () => {
    return contibutorsData?.data?.map((c: any) => (
      <tr key={c.id}>
        <td className="text-start">{c?.token}</td>
        <td className="">{c.walletAddress}</td>
        <td className="">{c?.fAmount}</td>
        <td>{c?.quota}</td>
        <td>{formatDate(c?.createdAt)}</td>
      </tr>
    ));
  };

  return (
    <>
      <Header />
      <section className="pt-20 pb-40">
        <div className="h-[96px] md:h-[191px] w-full ">
          <Image
            src="/images/cover_pic.png"
            alt="cover photo"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container px-4 md:px-8 mx-auto flex flex-col items-center md:items-start -mt-8 md:-mt-16">
          <div className="h-20  w-20 md:h-[160px] md:w-[160px] rounded-full  overflow-hidden bg-customGray">
            <Image
              src={projectData?.projectImageUrl}
              alt={projectData?.name || "image"}
              width={700}
              height={700}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold md:text-3xl mt-1">
              {capitalize(projectData?.name)}
            </h3>
          </div>
          <div className=" flex flex-col mt-2  w-full md:flex-row md:justify-between items-center">
            <div className="max-w-3xl">
              <p className="text-xs md:text-base text-center md:text-start  ">
                {projectData?.description}
              </p>
              <div className=" flex gap-x-7 gap-y-3 items-center my-6 flex-wrap justify-center md:justify-start">
                <div className="flex items-center gap-4">
                  {projectData?.twitter && (
                    <Link
                      href={projectData?.twitter}
                      className="block min-h-7 min-w-7 h-7 w-7 rounded-full bg-dark hover:scale-110 duration-150"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src="/icons/x_logo.svg"
                        alt="x_logo"
                        width={700}
                        height={700}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  {/* <div>{projectData?.twitter}</div> */}
                </div>
                <div className=" flex items-center gap-4 ">
                  {projectData?.discord && (
                    <Link
                      href={projectData?.discord}
                      className="block min-h-7 min-w-7 h-7 w-7 rounded-full bg-dark hover:scale-110 duration-150"
                      target="_blank"
                    >
                      <Image
                        src="/icons/discord_logo.svg"
                        alt="discord_logo"
                        width={700}
                        height={700}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  {/* <div>{projectData?.discord}</div> */}
                </div>
                <div className="flex items-center gap-4">
                  {projectData?.telegram && (
                    <Link
                      target="_blank"
                      href={projectData?.telegram}
                      className="block min-h-7 min-w-7 h-7 w-7 rounded-full bg-dark hover:scale-110 duration-150"
                    >
                      {" "}
                      <Image
                        src="/icons/telegram_logo.svg"
                        alt="telegram_logo"
                        width={700}
                        height={700}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  {/* <div>{projectData?.telegram}</div> */}
                </div>
              </div>
            </div>
            {isConnected ? (
              <Button
                title={"Contribute"}
                css="w-full md:w-fit"
                fn={handleOpenContributeModal}
                loading={isConnecting}
              />
            ) : (
              <Button
                title="Connect & Contribute"
                fn={() => router.push("/connectWallet")}
              />
            )}
          </div>
        </div>

        <section className="mt-8">
          <div className="container mx-auto px-4 lg:px-8">
            {!contibutorsData?.data && isLoading ? (
              <Loading />
            ) : contibutorsData?.data && !contibutorsData?.meta?.count ? (
              <div className="my-16 flex flex-col items-center">
                <h4 className="text-center md:text-xl mb-6">
                  There are no Contributions for this project currently.
                </h4>
              </div>
            ) : (
              <div>
                <div className="border border-primaryTransparent rounded-lg py-2  ">
                  <h3 className="p-5 pt-2">Recent Contributions</h3>
                  <div className="border-t  border-primaryTransparent py-2 overflow-x-auto">
                    <table>
                      <thead className="border-b border-primaryTransparent ">
                        <tr>
                          <td>Token Recieved</td>
                          <td>Contributor Wallet Address</td>
                          <td>Amount</td>
                          <td>Quota</td>
                          <td>Date</td>
                        </tr>
                      </thead>
                      <tbody>{renderContributors()}</tbody>
                    </table>
                  </div>
                </div>
                {contibutorsData?.data?.length > 0 && (
                  <Pagination totalCount={contibutorsData?.meta?.count} />
                )}
              </div>
            )}
          </div>
        </section>
      </section>
      {showContributeModal && (
        <ContributeModal
          showCongratsModal={handleOpenCongratsModal}
          hash={hash}
          isPending={isPending}
          isSuccess={isSuccess}
          sendTransaction={sendTransaction}
          wallet={projectData?.walletAddress}
          projectId={projectData?.id}
        />
      )}
      {showCongratsModal && (
        <CongratsModal
          isPending={isPending}
          isSuccess={isSuccess}
          projectName={projectData?.name}
          walletAddress={projectData?.walletAddress}
        />
      )}
    </>
  );
};

export default Page;
