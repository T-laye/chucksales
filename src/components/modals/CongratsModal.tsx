"use client";
import React, { MouseEventHandler, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../ui/Button";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { ContributeFormValues } from "@/types/Forms";
import { useRouter } from "next/navigation";
import { handleCongratsModal, handleHash } from "@/redux/slices/variables";
import { useDispatch, useSelector } from "react-redux";
import BtnLoader from "../ui/BtnLoader";
import { capitalize } from "@/utils/Helpers";

interface CongratsModalProps {
  isConfirming: boolean;
  projectName: string;
  walletAddress: string;
}

const CongratsModal: React.FC<CongratsModalProps> = ({
  isConfirming,
  projectName,
  walletAddress,
}) => {
  const dispatch = useDispatch();
  // const router = useRouter();
  const { transactionHash } = useSelector((state: any) => state.variables);

  // const { transactionDataFetch, transactionSuccessful } = useSelector((state: any) => state.variables);
  console.log(transactionHash);

  const proceed = () => {
    dispatch(handleCongratsModal(false));
    // dispatch(handleHash(''));
    // router.push("/");
  };

  return (
    <div className="flex justify-center items-center px-4 md:px-8 fixed bg-[#05070CCC] backdrop-blur-sm top-0 bottom-0 left-0 right-0 ">
      <>
        {isConfirming ? (
          <div className="flex flex-col justify-center items-center max-w-[506px] w-full rounded-2xl min-h-[281px] bg-[#131318] p-6">
            <div className="">
              <svg
                width="161"
                height="160"
                viewBox="0 0 161 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  width="160"
                  height="160"
                  rx="80"
                  fill="#688CEC"
                  fillOpacity="0.1"
                />
                <path
                  d="M101.333 43.9074C95.2044 40.3622 88.089 38.3332 80.4997 38.3332C57.4878 38.3332 38.833 56.988 38.833 79.9998C38.833 103.012 57.4878 121.667 80.4997 121.667C103.512 121.667 122.166 103.012 122.166 79.9998C122.166 77.146 121.879 74.3591 121.333 71.6665"
                  stroke="#688CEC"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M63.833 82.0832C63.833 82.0832 70.083 82.0832 78.4163 96.6666C78.4163 96.6666 101.578 58.4721 122.166 50.8333"
                  stroke="#688CEC"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-center font-bold mt-6">Congratulations</h2>
            <p className="text-center mt-3 mb-5">
              You have successfully contributed to {capitalize(projectName)}{" "}
              having wallet address : {walletAddress}
            </p>
            <Button
              title="Proceed"
              css="text-white"
              primary={false}
              fn={proceed}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center max-w-[506px] w-full rounded-2xl min-h-[281px] bg-[#131318] p-6">
            <BtnLoader size={100} css="text-primary" />
          </div>
        )}
      </>
    </div>
  );
};

export default CongratsModal;
