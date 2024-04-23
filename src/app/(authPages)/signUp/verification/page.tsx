import OtpForm from "@/components/OtpForm";
import Image from "next/image";
import React from "react";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

const Page: React.FC = () => {
  return (
    <section className="py-10">
      <h3 className="text-center mt-12">Verification</h3>

      <div className="mt-8 flex items-center justify-center">
        <Image
          src="/images/email_verification_guy.png"
          alt="Mail Man"
          height={500}
          width={500}
          className="object-cover object-center w-[120px] h-[120px] sm:h-[200px] sm:w-[200px]  mx-auto"
        />
      </div>

      <h4 className="text-center sm:text-lg mt-5 mb-2 font-sfMEd">
        Check your mail
      </h4>

      <p className="text-center text-xs sm:text-base px-2">
        An OTP has been sent to your email address with which you will be able
        to access your account{" "}
      </p>

      <h5 className="text-primary text-xs my-5 md:text-base text-center">
        Enter OTP below
      </h5>

      <OtpForm />
    </section>
  );
};

export default Page;
