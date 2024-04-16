"use client";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavLink from "./ui/NavLink";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header() {
  const [showNav, setshowNav] = useState(false);

  const handleNav = () => {
    setshowNav(!showNav);
  };

  return (
    <header className="fixed top-0 left-0 right-0 lg:px-8 bg-dark ">
      <div className="container px-4 py-3 max-[350px]:px-1 mx-auto flex items-center justify-between">
        <div className="lg:flex items-center lg:gap-8">
          <Logo />
          <nav
            className={`${
              showNav ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
            } duration-200 fixed h-screen bg-customGrayTransparent lg:bg-dark backdrop-blur-sm top-0 left-0 right-0 lg:static lg:h-auto`}
          >
            <div className="flex flex-col bg-dark p-6 gap-16 pb-20 lg:p-0 lg:pb-0">
              <div className="flex justify-between items-center lg:hidden">
                <Logo />
                <IoClose
                  onClick={handleNav}
                  size={28}
                  className="cursor-pointer"
                />
              </div>
              <ul className="px-2 flex flex-col gap-6 lg:flex-row">
                <NavLink title="How it works" url="#" />
                <NavLink title="Rewards" url="#" />
                <NavLink title="FAQs" url="#" />
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="lg:flex items-center lg:text-2xl text-lg p-1 lg:h-8 lg:w-8 text-[#FFFFFFCC] justify-center bg-[#333] cursor-pointer rounded-full max-[300px]:hidden ">
            <IoIosNotificationsOutline />
          </div>
          <Button />
          <HiOutlineMenuAlt3
            onClick={handleNav}
            size={28}
            className="cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}
