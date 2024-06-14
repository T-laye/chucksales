import React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

interface layoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className=" lg:flex lg:h-screen ">
      <Navbar />
      <div className="w-full ">
        <Header />
        <div className="bg-red-400  lg:h-[90vh] h-full px-10 py-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
