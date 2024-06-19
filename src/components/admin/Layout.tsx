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
      <div className="w-full overflow-x-auto ">
        <Header />
        <div className="  lg:h-[90vh] h-full lg:px-10 lg:py-6 px-4 pt-20 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
