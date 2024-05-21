import { axiosAuth } from "@/config/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useAxiosAuth() {
  const { auth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axiosAuth;
}
