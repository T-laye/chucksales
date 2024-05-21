"use client";
import Header from "@/components/landingPage/Header";
import React, { Suspense } from "react";
import AuthProvider from "../(authPages)/AuthProvider";
import Loading from "@/components/ui/loading";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <Header />
      {/* <Suspense fallback={<Loading />}> */}
        <div className="pt-20 pb-40">{children}</div>
      {/* </Suspense> */}
    </AuthProvider>
  );
};

export default layout;
