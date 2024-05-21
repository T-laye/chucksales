"use client";
import Header from "@/components/landingPage/Header";
import React from "react";
import AuthProvider from "../(authPages)/AuthProvider";
import Toast from "@/components/ui/Toast";

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
      <Toast />
    </AuthProvider>
  );
};

export default layout;
