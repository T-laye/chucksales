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

interface ContributeModalProps {
  showCongratsModal: any;
  data: any;
  isSuccess: boolean;
  isConfirmed: boolean;
  sendTransaction: any;
  hash: any;
  isPending: boolean;
}

const ContributeModal: React.FC<ContributeModalProps> = ({
  showCongratsModal,
  data,
  isSuccess,
  isConfirmed,
  sendTransaction,
  hash,
  isPending,
}) => {
  const dispatch = useDispatch();

  //  0xaa60472bbdd22b20f7f5fb0c373b56076e570dc1751e108d75678725037da4fc

  const handleCloseModal = () => {
    dispatch(handleContributeModal(false));
  };

  const formik = useFormik<ContributeFormValues>({
    initialValues: {
      contributeTo: `0x${0}`,
      amount: "",
      coin: "",
    },
    validate: contribution_validate,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: ContributeFormValues) {
    const to = values.contributeTo;
    const value = values.amount;
    sendTransaction({ to, value: parseEther(value) });
  }

  useEffect(() => {
    // if (isSuccess && !isConfirmed) {
    //   dispatch(handleTransactionDataFetch(true));
    // }
    if (isConfirmed && hash && data) {
      const {
        blockHash,
        chainId,
        contractAddress,
        from,
        status,
        to,
        transactionHash,
        transactionIndex,
        blockNumber,
        cumulativeGasUsed,
        effectiveGasPrice,
        gasUsed,
      } = data;
      dispatch(handleContributeModal(false));
      // handleTransactionDataFetch(false);
      dispatch(handleCongratsModal(true));
      // dispatch(handleTransactionSuccess(isSuccess));
      dispatch(handleHash(hash));
      dispatch(
        handleTransactionData({
          blockHash,
          chainId,
          contractAddress,
          from,
          status,
          to,
          transactionHash,
          transactionIndex,
          blockNumber: convertToNumber(blockNumber),
          cumulativeGasUsed: convertToNumber(cumulativeGasUsed),
          effectiveGasPrice: convertToNumber(effectiveGasPrice),
          gasUsed: convertToNumber(gasUsed),
        })
      );
    }
  }, [data, dispatch, hash, isConfirmed, isSuccess]);

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
            <label className="" htmlFor="contributeTo">
              You&apos;re Contributing to
            </label>
            <input
              // readOnly
              type="contributeTo"
              className={getInputClassNames("contributeTo")}
              {...formik.getFieldProps("contributeTo")}
            />
            {formik.touched.contributeTo && formik.errors.contributeTo && (
              <div className="form_errors">{formik.errors.contributeTo}</div>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <label className="" htmlFor="amount">
              Amount
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

          {/* <div className="text-xs md:text-base my-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <div>Account Balance</div>
              <div>0.0002%</div>
            </div>
            <div className="flex justify-between">
              <div>Gas fee (est.)</div>
              <div>2 USDT</div>
            </div>
            <div className="flex justify-between">
              <div>Transfer time</div>
              <div>11:59GMT+1</div>
            </div>
            <div className="flex justify-between">
              <div>Transaction Hash</div>
              <div>{hash && <div>Transaction Hash: {hash}</div>}</div>
            </div>
          </div> */}
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
    </div>
  );
};

export default ContributeModal;
