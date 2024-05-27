// /projects/create;

import { ProjectFormValues } from "@/types/Forms";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

interface CreateProjectProps {
  axios: AxiosInstance;
  dispatch: Dispatch;
  router: any;
  values: ProjectFormValues;
}

export const createProject = async ({
  axios,
  dispatch,
  router,
  values,
}: CreateProjectProps) => {
  try {
    const res = await axios.post("/projects/create", {
      name: "",
      description: "",
      logo: null,
      email: "",
      wallet: "",
      twitter: "",
      discord: "",
      telegram: "",
      website: "",
      percentageCirculation: 0,
      totalTokenCirculation: 0,
    });
  } catch (error: any) {}
};
