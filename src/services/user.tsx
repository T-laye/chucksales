import {
  loginError,
  loginStart,
  loginSuccess,
  setCredentials,
} from "@/redux/slices/authSlice";
import { AuthFormValues } from "@/types/Forms";
import { toast } from "@/utils/Toast";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

interface HandleSignUpProps {
  axios: AxiosInstance;
  dispatch: Dispatch;
  router: any;
  values: AuthFormValues;
  otpValues?: string;
}

export const handleSignUp = async ({
  axios,
  dispatch,
  router,
  values,
}: HandleSignUpProps) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/signup", {
      name: values.fullName,
      email: values.email,
      password: values.password,
    });

    // console.log(res);
    if (res.status === 201) {
      // const accessToken = res.data.data.accessToken;
      // const user = res.data?.data?.user;
      // sessionStorage.setItem("accessToken", accessToken);
      // sessionStorage.setItem("user", JSON.stringify(user));
      // dispatch(setCredentials({ ...res.data }));
      dispatch(loginSuccess());
      router.push("/signUp/verification");
      toast({
        dispatch,
        message: "Successfully Created",
      });
    }
  } catch (error: any) {
    const statusCode = error.response.data.statusCode;
    dispatch(loginError());

    console.log(error.response.data.statusCode);
    if (statusCode === 400) {
      toast({
        dispatch,
        message: "Password not strong enough",
      });
    } else if (statusCode === 403) {
      toast({
        dispatch,
        message: "User email already exist",
      });
    } else {
      toast({
        dispatch,
        message: "Something went wrong!!!",
      });
    }
  }
};

export const handleSignIn = async ({
  axios,
  dispatch,
  router,
  values,
}: HandleSignUpProps) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", {
      email: values.email,
      password: values.password,
    });
    // console.log(res.status);
    if (res.status === 201) {
      const accessToken = res.data?.data?.accessToken;
      const user = res.data?.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("user", JSON.stringify(user));
      dispatch(setCredentials({ ...res.data.data }));
      dispatch(loginSuccess());
      router.push("/dashboard");
      const message = "Login Successful";
      toast({ dispatch, message });
    }
  } catch (error: any) {
    const statusCode = error.response.data.statusCode;
    dispatch(loginError());

    console.log(error);
    if (statusCode === 400 || statusCode === 404) {
      toast({
        dispatch,
        message: "Incorrect Email or Password",
        color: "bg-error",
      });
    } else {
      toast({
        dispatch,
        message: "Something went wrong!!!",
        color: "bg-error",
      });
    }
    // console.log(error.response.data);
    // dispatch(loginError());
  }
};

export const handleOtp = async ({
  axios,
  dispatch,
  router,
  otpValues,
}: HandleSignUpProps) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/verify", {
      otp: otpValues,
    });
    // console.log(otpValues);
    // console.log(res.status);
    if (res.status === 201) {
      const accessToken = res.data?.data?.accessToken;
      const user = res.data?.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("user", JSON.stringify(user));
      dispatch(setCredentials({ ...res.data.data }));
      dispatch(loginSuccess());
      router.push("/dashboard");
      const message = "Verification Successful";
      toast({ dispatch, message });
    }
    // console.log(res);
  } catch (error: any) {
    // console.log(error.response.data);
    toast({ dispatch, message: "Invalid Otp" });
    // dispatch(loginError());
  }
  // console.log(otpValues);
};
