import Header from "@/components/landingPage/Header";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="pt-20 pb-40">{children}</section>
    </div>
  );
};

export default layout;
