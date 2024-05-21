"use client";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is authenticated based on session storage data
    const accessToken = sessionStorage.getItem("accessToken");
    const user = sessionStorage.getItem("user");

    if (accessToken && user) {
      dispatch(
        setCredentials({
          accessToken: accessToken,
          user: JSON.parse(user ? user : ""),
        })
      );
    } else {
      router.push("/signIn");
    }
  }, [dispatch, router]);

  return <div>{children}</div>;
};

export default AuthProvider;
