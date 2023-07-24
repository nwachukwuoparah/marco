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
    accountType: yup.bool().oneOf([true, false]),
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
    oldpassword: yup
      .string()
      .required("Old Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
        "Password should contain 6 characters(lowercase and uppercase) and at least one special"
      ),
    newpassword: yup
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
    bvn: yup
      .string()
      .required("BVN is required")
      .matches(/^\d{1,11}$/, "BVN should not be longer than 11 digits"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    lga: yup.string().required("LGA is required"),
    address: yup.string().required("Address is required"),
    businessname: yup.string().required("Business Name is required"),
    businessaddress: yup.string().required("Business address is required"),
    nin: yup
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
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    sex: yup.string().required("Email is required"),
    pnonenumber: yup
      .string()
      .required("NIN is required")
      .matches(/^\d{1,11}$/, "NIN should not be longer than 11 digits"),
  })
  .required();

export const Transfer_schema = yup
  .object({
    bankName: yup.string().required("Bank Name is required"),
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
    selectBiller: yup.string().required("Bank Name is required"),
    phoneNumber: yup
      .string()
      .required("Account Number is required")
      .matches(
        /^\d{1,10}$/,
        "Account Number should not be longer than 11 digits"
      ),
    amount: yup.string().required("Amount is required"),
  })
  .required();
