"use client";
import Header from "@/components/landingPage/Header";
import React from "react";
import AuthProvider from "../(authPages)/AuthProvider";
import Toast from "@/components/ui/Toast";
import { Layout } from "@/components/admin/Layout";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <Layout>
        <div className="overflow-auto">{children}</div>
        <Toast />
      </Layout>
    </AuthProvider>
  );
};

export default layout;
