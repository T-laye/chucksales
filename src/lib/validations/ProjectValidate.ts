import { ProjectFormValues } from "@/types/Forms";
import * as Yup from "yup";

const project_validation = Yup.object().shape({
  name: Yup.string().required("required"),
  description: Yup.string().required("required"),
  logo: Yup.string().required("required"),
  email: Yup.string().email("Invalid email address").required("required"),
  wallet: Yup.string().required("required"),
  twitter: Yup.string().required("required"),
  discord: Yup.string().required("required"),
  telegram: Yup.string().required("required"),
  website: Yup.string().required("required"),
});

export default project_validation;

// interface ErrorsState {
//   name?: string;
//   description?: string;
//   logo?: string;
//   email?: string;
//   wallet?: string;
//   twitter?: string;
//   discord?: string;
//   telegram?: string;
//   website?: string;
// }

// export function project_validate(values: ProjectFormValues): ErrorsState {
//   const errors: ErrorsState = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.description) {
//     errors.description = "Required";
//   }
//   if (!values.logo) {
//     errors.logo = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.wallet) {
//     errors.wallet = "Required";
//   }
//   if (!values.twitter) {
//     errors.twitter = "Required";
//   }
//   if (!values.discord) {
//     errors.discord = "Required";
//   }
//   if (!values.telegram) {
//     errors.telegram = "Required";
//   }
//   if (!values.website) {
//     errors.website = "Required";
//   }

//   return errors;
// }
