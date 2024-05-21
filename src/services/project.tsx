import {
  loginError,
  loginStart,
  loginSuccess,
  setCredentials,
} from "@/redux/slices/authSlice";
import { AuthFormValues } from "@/types/Forms";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

interface HandleSignUpProps {
  axios: AxiosInstance;
  dispatch: Dispatch;
  router: any;
  values: AuthFormValues;
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

    switch (res.data.data.statusCode) {
      case 400:
        dispatch(loginError());
        // toast message res.data.data.message
        break;
      case 403:
        // toast message
        break;
      default:
        const accessToken = res.data.data.accessToken;
        const user = res.data?.data?.user;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(setCredentials({ ...res.data }));
        dispatch(loginSuccess());
        router.push("/signUp/verification");
        break;
    }
  } catch (error) {
    console.log(error);
    dispatch(loginError());
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

    console.log(res);

    switch (res.data.data.statusCode) {
      case 400:
        dispatch(loginError());
        // toast message res.data.data.message
        break;
      default:
        const accessToken = res.data?.data?.accessToken;
        const user = res.data?.data;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(setCredentials({ ...res.data.data }));
        dispatch(loginSuccess());
        router.push("/dashboard");
        break;
    }
  } catch (error) {
    console.log(error);
    dispatch(loginError());
  }
};
