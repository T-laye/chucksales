"use client";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavLink from "../ui/NavLink";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { usePathname, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { toast } from "@/utils/Toast";
import { useDispatch } from "react-redux";

export default function Header() {
  const [showNav, setshowNav] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { open, close } = useWeb3Modal();
  const [isLoading, setIsLoading] = useState(false);
  const user = sessionStorage.getItem("user");
  const axiosAuth = useAxiosAuth();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn: (data: any) => axiosAuth.post("/auth/logout"),
    onSuccess: (data) => {
      toast({ dispatch, message: "Successfully Logged out" });
      sessionStorage.setItem("accessToken", "");
      sessionStorage.setItem("user", "");
      // console.log(data);
    },
    onError: (error: any) => {
      toast({ dispatch, message: "Something went wrong" });
    },
  });

  const handleNav = () => {
    setshowNav(!showNav);
  };

  return (
    <header className="fixed top-0 left-0 right-0 lg:px-8 bg-dark z-[100]">
      <div className="container px-4 py-3 max-[350px]:px-1 mx-auto flex items-center justify-between ">
        <div className="xl:flex items-center xl:gap-8">
          <Logo />
          <nav
            onClick={handleNav}
            className={`${
              showNav ? "translate-y-0" : "-translate-y-full xl:translate-y-0"
            } duration-200 fixed h-screen bg-customGrayTransparent xl:bg-dark backdrop-blur-sm top-0 left-0 right-0 xl:static xl:h-auto`}
          >
            <div className="flex flex-col bg-dark pt-14 px-6 gap-16 pb-20 xl:p-0 xl:pb-0">
              <div className="flex justify-between items-center xl:hidden">
                <Logo />
                <IoClose
                  onClick={handleNav}
                  size={28}
                  className="cursor-pointer"
                />
              </div>
              <ul className="px-2 flex flex-col gap-6 xl:flex-row">
                <NavLink title="Home" url="/" />
                {!pathname.startsWith("/dashboard") && (
                  <>
                    <NavLink title="How it works" url="/#howItWorks" />
                    <NavLink title="Rewards" url="/rewards" />
                    <NavLink title="FAQs" url="/#faq" />
                    <NavLink title="Documentation" url="/documentation" />
                  </>
                )}
                {user && (
                  <>
                    <NavLink title="Dashboard" url="/dashboard" />
                    {pathname.startsWith("/dashboard") && (
                      <>
                        <NavLink title="Profile" url="/dashboard/profile" />
                        <div onClick={mutate}>
                          <NavLink title="Logout" url="/" />
                        </div>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex w-full justify-end mr-0 sm:hidden ">
          <w3m-button />
        </div>
        <div className="flex items-center gap-3 xl:gap-5">
          <div className="hidden sm:block ">
            <w3m-button />
          </div>
          <HiOutlineMenuAlt3
            onClick={handleNav}
            size={28}
            className="cursor-pointer xl:hidden"
          />
        </div>
      </div>
    </header>
  );
}
