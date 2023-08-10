import * as yup from "yup";
// "FirstName": "Favour",
// "LastName": "Igbani",
// "email": "favourigbani29@gmail.com",
// "password": "Favour#01",
// "accountType": "business"

export const Signup_schema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .matches(
        /^[a-zA-Z]{1,15}$/,
        "First Name must not longer than 15 letters"
      ),
    lastName: yup
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
    accountType: yup.string().required("Account type is required"),
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
    oldPassword: yup
      .string()
      .required("Old Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain 6 characters(lowercase and uppercase) and at least one special"
      ),
    newPassword: yup
      .string()
      .required("New Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain 6 characters(lowercase and uppercase) and at least one special"
      ),
  })
  .required();

export const Compliance_schema = yup
  .object({
    BVN: yup
      .string()
      .required("BVN is required")
      .matches(/^\d{1,11}$/, "BVN should not be longer than 11 digits"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    LGA: yup.string().required("LGA is required"),
    address: yup.string().required("Address is required"),
    businessName: yup.string().when("isDisabled", (isDisabled, schema) => {
      if (!isDisabled) {
        console.log(isDisabled);
        return schema.required("Business Name is required");
      }
      return schema;
    }),

    businessAddress: yup.string().when("isDisabled", (isDisabled, schema) => {
      if (!isDisabled) {
        console.log(isDisabled);
        return schema.required("Business address is required");
      }
      return schema;
    }),
    NIN: yup
      .string()
      .required("NIN is required")
      .matches(/^\d{1,11}$/, "NIN should not be longer than 11 digits"),
    image: yup
      .mixed()
      .test({
        name: "required",
        message: "NIN document is requried",
        test: (value) => value?.length > 0,
      })
      .test({
        name: "fileSize",
        message: "file uploaded is larger than 500kb",
        test: (value) => {
          if (typeof value === "object") {
            return value[0]?.size < 500000;
          } else {
            return true;
          }
        },
      }),
  })
  .required();

export const User_schema = yup
  .object({
    image: yup
      .mixed()
      .test({
        name: "required",
        message: "NIN document is requried",
        test: (value) => value?.length > 0,
      })
      .test({
        name: "fileSize",
        message: "file uploaded is larger than 500kb",
        test: (value) => {
          if (typeof value === "object") {
            return value[0]?.size < 500000;
          } else {
            return true;
          }
        },
      }),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    sex: yup.string().required("Sex is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{1,11}$/, "NIN should not be longer than 11 digits"),
  })
  .required();

export const Transfer_schema = yup
  .object({
    accountNumber: yup
      .string()
      .required("Account Number is required")
      .matches(
        /^\d{1,10}$/,
        "Account Number should not be longer than 11 digits"
      ),
    amount: yup.string().required("Amount is required"),
    naration: yup.string(),
  })
  .required();

export const Airtime_schema = yup
  .object({
    serviceNetwork: yup.string().required("Bank Name is required"),
    phoneNumber: yup
      .string()
      .required("Account Number is required")
      .matches(
        /^\d{1,11}$/,
        "Phone Number should not be longer than 11 digits"
      ),
    amount: yup.string().required("Amount is required"),
  })
  .required();

export const Depopsit_schema = yup
  .object({
    cardNumber: yup.string().required("Card Number Number is required"),
    amount: yup.string().required("Amount is required"),
    expiryDate: yup.string().required("Amount is required"),
    CVV: yup.string().required("Amount is required"),
  })
  .required();
