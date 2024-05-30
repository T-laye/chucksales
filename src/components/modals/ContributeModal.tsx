"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../ui/Button";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { ContributeFormValues } from "@/types/Forms";
import { useRouter } from "next/navigation";
import {
  handleCongratsModal,
  handleContributeModal,
  handleHash,
  handleTransactionData,
} from "@/redux/slices/variables";
import { useDispatch, useSelector } from "react-redux";
import { parseEther } from "viem";
import { contribution_validate } from "@/lib/validations/ProjectValidate";
import { convertToNumber } from "@/utils/Helpers";
import BtnLoader from "../ui/BtnLoader";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/utils/Toast";

interface ContributeModalProps {
  showCongratsModal: any;
  data: any;
  isSuccess: boolean;
  isConfirmed: boolean;
  sendTransaction: any;
  hash: any;
  isPending: boolean;
  isConfirming: boolean;
  wallet: string;
  projectId: string;
}

const ContributeModal: React.FC<ContributeModalProps> = ({
  showCongratsModal,
  data,
  isSuccess,
  isConfirmed,
  isConfirming,
  sendTransaction,
  hash,
  isPending,
  wallet,
  projectId,
}) => {
  const dispatch = useDispatch();
  const axiosAuth = useAxiosAuth();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: any) => axiosAuth.post("/projects/transaction", data),
    onSuccess: (data) => {
      toast({ dispatch, message: "Transatcion Successful" });
      dispatch(handleContributeModal(false));
      dispatch(handleCongratsModal(true));
      console.log(data);
    },

    onError: (error: any) => {
      if (error?.message === "Request failed with status code 401") {
        router.replace("/signIn");
        toast({ dispatch, message: "Unauthenticated Please Login" });
      } else if (error?.message === "Request failed with status code 500") {
        toast({ dispatch, message: "Server Error" });
      } else {
        toast({ dispatch, message: "Something went wrong" });
      }
      console.log(error);
    },
  });

  const handleCloseModal = () => {
    dispatch(handleContributeModal(false));
  };

  const formik = useFormik<ContributeFormValues>({
    initialValues: {
      // contributeTo: wallet,
      amount: "",
      email: "",
    },
    validate: contribution_validate,
    onSubmit: handleSubmit,
  });
  // console.log(projectId)
  async function handleSubmit(values: ContributeFormValues) {
    const to = wallet;
    const value = values.amount;
    sendTransaction({ to, value: parseEther(value) });
  }

  console.log(formik.values.amount, formik.values?.email, projectId, hash);
  useEffect(() => {
    if (hash) {
      mutate({
        token: formik.values.amount,
        projectId,
        email: formik.values?.email,
        hash,
      });
      console.log(hash, "in if statement");
    }
    // console.log(hash, "outside if statement");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  // useEffect(() => {
  //   if (isConfirmed && hash && data) {
  //     const {
  //       blockHash,
  //       chainId,
  //       contractAddress,
  //       from,
  //       status,
  //       transactionHash,
  //       transactionIndex,
  //       blockNumber,
  //       cumulativeGasUsed,
  //       effectiveGasPrice,
  //       gasUsed,
  //     } = data;
  //     dispatch(handleContributeModal(false));
  //     dispatch(handleCongratsModal(true));
  //     dispatch(handleHash(hash));
  //     dispatch(
  //       handleTransactionData({
  //         blockHash,
  //         chainId,
  //         contractAddress,
  //         from,
  //         status,
  //         to: wallet,
  //         transactionHash,
  //         transactionIndex,
  //         blockNumber: convertToNumber(blockNumber),
  //         cumulativeGasUsed: convertToNumber(cumulativeGasUsed),
  //         effectiveGasPrice: convertToNumber(effectiveGasPrice),
  //         gasUsed: convertToNumber(gasUsed),
  //       })
  //     );
  //   }
  // }, [data, dispatch, hash, isConfirmed, isSuccess, wallet]);

  const getInputClassNames = (
    fieldName: keyof ContributeFormValues
  ): string => {
    return `${
      (Error as FormikErrors<ContributeFormValues>)[fieldName] &&
      (Touch as FormikTouched<ContributeFormValues>)[fieldName]
        ? "focus:border-error foucus:text-error"
        : ""
    }`;
  };
  return (
    <div className="flex justify-center items-center px-4 md:px-8 fixed bg-[#05070CCC] backdrop-blur-sm top-0 bottom-0 left-0 right-0 ">
      {!isConfirming ? (
        <div className="max-w-[506px] w-full rounded-2xl min-h-[428px] bg-[#131318] pt-3 px-3 pb-6 md:px-6 md:pb-8 md:pt-6">
          <div className="flex justify-end">
            <MdOutlineCancel
              className="text-lg md:text-3xl text-[#ffffff60]"
              onClick={handleCloseModal}
            />
          </div>
          <h3 className="text-primary text-center mb-8">Contribute</h3>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="text-sm" htmlFor="contributeTo">
                You&apos;re Contributing to
              </label>
              {/* <input
                // readOnly
                type="contributeTo"
                className={getInputClassNames("contributeTo")}
                {...formik.getFieldProps("contributeTo")}
              />
              {formik.touched.contributeTo && formik.errors.contributeTo && (
                <div className="form_errors">{formik.errors.contributeTo}</div>
              )} */}
              <div className="text-base break-words whitespace-normal">
                {wallet}
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className={getInputClassNames("email")}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="form_errors">{formik.errors.email}</div>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="" htmlFor="amount">
                Token
              </label>
              <input
                type="text"
                className={getInputClassNames("amount")}
                {...formik.getFieldProps("amount")}
              />
              {formik.touched.amount && formik.errors.amount && (
                <div className="form_errors">{formik.errors.amount}</div>
              )}
            </div>
            <div>
              <Button
                title="Contribute"
                css="w-full"
                loading={isPending}
                type="submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center max-w-[506px] w-full rounded-2xl min-h-[281px] bg-[#131318] p-6">
          <BtnLoader size={100} css="text-primary" />
        </div>
      )}
    </div>
  );
};

export default ContributeModal;
