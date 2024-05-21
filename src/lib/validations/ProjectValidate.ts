import { ContributeFormValues } from "@/types/Forms";
import * as Yup from "yup";

const project_validation = Yup.object().shape({
  name: Yup.string().required("required"),
  description: Yup.string().required("required"),
  // logo: Yup.string().required("required"),
  email: Yup.string().email("Invalid email address").required("required"),
  wallet: Yup.string().required("required"),
  twitter: Yup.string().required("required"),
  discord: Yup.string().required("required"),
  telegram: Yup.string().required("required"),
  website: Yup.string().required("required"),
});

export default project_validation;

interface ErrorsState {
  contributeTo?: string;
  amount?: string;
  coin?: string;
}

export function contribution_validate(
  values: ContributeFormValues
): ErrorsState {
  const errors: ErrorsState = {};

  if (!values.contributeTo) {
    errors.contributeTo = "required";
  } else if (!values.contributeTo.startsWith("0x")) {
    errors.contributeTo = "Invalid wallet id";
  }
  if (!values.amount) {
    errors.amount = "required";
  }
  // if(!values.contributeTo){
  //   errors.contributeTo = 'required'
  // }

  return errors;
}
