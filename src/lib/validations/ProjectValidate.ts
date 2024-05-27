import * as Yup from "yup";
import { ContributeFormValues } from "@/types/Forms";

// Define FileType interface
interface FileType {
  size: number;
  type: string;
}

// Define the validation schema
const project_validation = Yup.object().shape({
  name: Yup.string().required("required"),
  description: Yup.string().required("required"),
  email: Yup.string().email("Invalid email address").required("required"),
  wallet: Yup.string().required("required"),
  twitter: Yup.string().required("required"),
  discord: Yup.string().required("required"),
  telegram: Yup.string().required("required"),
  website: Yup.string().required("required"),
  percentageCirculation: Yup.string().required("required"),
  totalTokenCirculation: Yup.string().required("required"),
  extension: Yup.string().required("required"),
  logo: Yup.mixed<FileType>()
    .required("Please select an image")
    .test("fileSize", "Must be less than 5mb", (value) => {
      return value && value.size < 5 * 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    }),
});

export default project_validation;

// Define ErrorsState interface
interface ErrorsState {
  contributeTo?: string;
  amount?: string;
  coin?: string;
}

// Define the contribution_validate function
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

  return errors;
}
