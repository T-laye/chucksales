import { AuthFormValues } from "@/types/Forms";

interface ErrorsState {
  fullName?: string;
  email?: string;
  password?: string;
  cPassword?: string;
}

export function signUp_validate(values: AuthFormValues): ErrorsState {
  const errors: ErrorsState = {};

  if (!values.fullName) {
    errors.fullName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  if (!values.cPassword) {
    errors.cPassword = "Required";
  } else if (values.cPassword.length < 6) {
    errors.cPassword = "Must be at least 6 characters";
  } else if (values.cPassword.includes(" ")) {
    errors.cPassword = "Invalid Password";
  } else if (values.cPassword !== values.password) {
    errors.cPassword = "Not matching with password";
  }

  return errors;
}

export function signIn_validate(values: AuthFormValues): ErrorsState {
  const errors: ErrorsState = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}
