import * as yup from "yup";

export const Signup_schema = yup
  .object({
    firstname: yup
      .string()
      .required("First name is required")
      .matches(
        /^[a-zA-Z]{1,15}$/,
        "First Name must not longer than 15 letters"
      ),
    lastname: yup
      .string()
      .required("Last name is required")
      .matches(
        /^[a-zA-Z]{1,15}$/,
        "First Name must not longer than 15 letters"
      ),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain (6, at leastone special) characters lowercase and uppercase"
      ),
    terms: yup.bool().oneOf([true], "Field must be checked"),
  })
  .required();

export const Login_schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain (6, at leastone special) characters lowercase and uppercase"
      ),
    memo: yup.boolean().required(),
  })
  .required();

export const Forget_schema = yup
  .object({
    email: yup.string().required("Email is required"),
  })
  .required();

export const Change_schema = yup
  .object({
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain (6, at leastone special) characters lowercase and uppercase"
      ),
  })
  .required();
