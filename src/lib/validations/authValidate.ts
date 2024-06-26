import { AuthFormValues } from "@/types/Forms";

interface ErrorsState {
  fullName?: string;
  email?: string;
  password?: string;
  cPassword?: string;
  oldPassword?: string;
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
} else if (values.password.length < 8) {
  errors.password = "Must be at least 8 characters";
} else if (values.password.includes(" ")) {
  errors.password = "Invalid Password";
} else if (!/[A-Z]/.test(values.password)) {
  errors.password = "Must contain at least one uppercase letter";
} else if (!/[a-z]/.test(values.password)) {
  errors.password = "Must contain at least one lowercase letter";
} else if (!/[0-9]/.test(values.password)) {
  errors.password = "Must contain at least one number";
} else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
  errors.password = "Must contain at least one special character";
}

if (!values.cPassword) {
  errors.cPassword = "Required";
} else if (values.cPassword.length < 8) {
  errors.cPassword = "Must be at least 8 characters";
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
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 6 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function update_validate(values: AuthFormValues): ErrorsState {
  const errors: ErrorsState = {};

  // if (values.password && !values.oldPassword) {
  //   errors.oldPassword = "Required";
  // }
  //  else
    if (values.oldPassword && values.oldPassword.length < 8) {
    errors.oldPassword = "Must be at least 8 characters";
  } else if (values.oldPassword && values.oldPassword.includes(" ")) {
    errors.oldPassword = "Invalid old Password";
  } else if (values.oldPassword && !/[A-Z]/.test(values.oldPassword)) {
    errors.oldPassword = "Must contain at least one uppercase letter";
  } else if (values.oldPassword && !/[a-z]/.test(values.oldPassword)) {
    errors.oldPassword = "Must contain at least one lowercase letter";
  } else if (values.oldPassword && !/[0-9]/.test(values.oldPassword)) {
    errors.oldPassword = "Must contain at least one number";
  } else if (
    values.oldPassword &&
    !/[!@#$%^&*(),.?":{}|<>]/.test(values.oldPassword)
  ) {
    errors.oldPassword = "Must contain at least one special character";
  }

  if (values.password) {
    if (values.password.length < 8) {
      errors.password = "Must be at least 8 characters";
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password = "Must contain at least one special character";
    }
  }

  return errors;
}
