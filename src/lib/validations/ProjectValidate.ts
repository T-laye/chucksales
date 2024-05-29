import * as Yup from "yup";
import { ContributeFormValues } from "@/types/Forms";

// Define FileType interface
interface FileType {
  size: number;
  type: string;
}


// Regex to validate a URL
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*\/?$/;

// Regex to validate Ethereum address
const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;

// Define the validation schema
const project_validation = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .max(300, "Name must be less than 300 characters")
    .required("Name is required"),
  description: Yup.string()
    .min(5, "Description must be at least 5 characters")
    .max(300, "Description must be less than 300 characters")
    .required("Description is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  wallet: Yup.string()
    .matches(ethereumAddressRegex, "Invalid Ethereum address")
    .required("Wallet address is required"),
  twitter: Yup.string()
    .matches(urlRegex, "Invalid Twitter link")
    .required("Twitter link is required"),
  discord: Yup.string()
    .matches(urlRegex, "Invalid Discord link")
    .required("Discord link is required"),
  telegram: Yup.string()
    .matches(urlRegex, "Invalid Telegram link")
    .required("Telegram link is required"),
  website: Yup.string()
    .matches(urlRegex, "Invalid Website link")
    .required("Website link is required"),
  percentageCirculation: Yup.string().required(
    "Percentage circulation is required"
  ),
  totalTokenCirculation: Yup.string().required(
    "Total token circulation is required"
  ),
  extension: Yup.string()
    .matches(/^\./, "Extension must start with a dot")
    .required("Extension is required"),
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
