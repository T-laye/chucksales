"use client";
import React, { MouseEventHandler, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../ui/Button";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { ContributeFormValues } from "@/types/Forms";
import { useRouter } from "next/navigation";
import { handleContributeModal } from "@/redux/slices/variables";
import { useDispatch, useSelector } from "react-redux";

interface ContributeModalProps {
  showCongratsModal?: any;
}

const ContributeModal: React.FC<ContributeModalProps> = ({
  showCongratsModal,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleCloseModal = () => {
    dispatch(handleContributeModal(false));
  };

  const formik = useFormik<ContributeFormValues>({
    initialValues: {
      contributeTo: "",
      amount: "",
      coin: "",
    },
    //   validate: signIn_validate,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: ContributeFormValues): void {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(handleContributeModal(false));
      showCongratsModal();
      //   router.push("/signUp/verification");
    }, 3000);
  }

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
              type="contributeTo"
              className={getInputClassNames("contributeTo")}
              {...formik.getFieldProps("contributeTo")}
            />
            {formik.touched.contributeTo && formik.errors.contributeTo && (
              <div className="form_errors">{formik.errors.contributeTo}</div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="" htmlFor="contributeTo">
              Amount
            </label>
            <input
              type="contributeTo"
              className={getInputClassNames("contributeTo")}
              {...formik.getFieldProps("contributeTo")}
            />
            {formik.touched.contributeTo && formik.errors.contributeTo && (
              <div className="form_errors">{formik.errors.contributeTo}</div>
            )}
          </div>

          <div className="text-xs md:text-base my-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <div>Network fee (est.)</div>
              <div>2 USDT</div>
            </div>
            <div className="flex justify-between">
              <div>Percentage gained</div>
              <div>0.0002%</div>
            </div>
            <div className="flex justify-between">
              <div>Transfer time</div>
              <div>11:59GMT+1</div>
            </div>
          </div>
          <div>
            <Button title="Contribute" css="w-full" loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContributeModal;
