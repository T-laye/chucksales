"use client";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="lg:flex h-screen">
      <div className="h-full w-1/2 hidden lg:block">
        <Image
          src="/images/sign_up_image.jpeg"
          alt="background"
          height={1000}
          width={1000}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="lg:w-1/2 sm:h-full  flex items-center justify-center container mx-auto px-5 lg:px-10">
        <div className="max-w-[414px]  w-full">
          <div className="mt-5 flex justify-center lg:hidden">
            <Logo w="w-[160px]" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
