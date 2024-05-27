"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AuthFormValues } from "@/types/Forms";
import { handleOtp } from "@/services/user";
import axios from "@/config/axios";

// OtpInput component
const OtpInput: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<boolean>(false);
  const { pending } = useSelector((state: any) => state.auth);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const user = sessionStorage.getItem("user");

  // console.log(user);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Backspace") {
      setError(false);
    }
  };

  const renderInputs = () => {
    return otp.map((value, index) => (
      <input
        key={index}
        ref={(ref) => {
          if (ref) inputRefs.current[index] = ref;
        }} // Modified ref callback function
        type="text"
        maxLength={1}
        defaultValue={value}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        className={`w-9 h-9 sm:w-14 sm:h-14  text-center outline-none sm:text-lg ${
          value ? "border-primary text-primary" : ""
        }`}
      />
    ));
  };


  function handleSubmit(values: AuthFormValues): any {
    handleOtp({ axios, dispatch, router, values, otpValues: otp.join("") });
    // console.log (otp.join(''))
  }

  return (
    <div>
      <div className="flex justify-center gap-2">{renderInputs()}</div>
      {error && !otp.includes("") && (
        <div className="text-xs text-center mt-2 text-error">Invalid Otp</div>
      )}
      {!otp.includes("") && (
        <Button
          title="Continue"
          css="w-full mt-5"
          fn={handleSubmit}
          loading={pending}
        />
      )}
    </div>
  );
};

export default OtpInput;
