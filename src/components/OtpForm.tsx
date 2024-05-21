"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// OtpInput component
const OtpInput: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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

  const handleSubmit = () => {
    const otpValues = otp.join("");
    // console.log(otpValues);

    if (otpValues === "123456" && user) {
      setLoading(true);
      setError(false);

      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 2000);
    } else {
      setError(true);
    }
  };

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
          loading={loading}
        />
      )}
    </div>
  );
};

export default OtpInput;
