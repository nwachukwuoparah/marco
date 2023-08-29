import * as yup from "yup";
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

export const businessCompliance_schema = yup
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
    businessName: yup.string().required("Business Name is required"),
    businessAddress: yup.string().required("Business Address is required"),
    cert: yup
      .mixed()
      .test({
        name: "required",
        message: "Certificate of Incorporation is requried",
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
    doc: yup
      .mixed()
      .test({
        name: "required",
        message: "Incorporation documents is requried",
        test: (value) => value?.length > 0,
      })
      .test({
        name: "fileSize",
        message: "Uploaded file should be in Pdf format",
        test: (value) => {
          if (typeof value === "object" && value instanceof FileList) {
            const pdfFile = value[0];
            return pdfFile.type === "application/pdf"; // && pdfFile.size < 500000;
          } else {
            return true; // Non-file values are considered valid
          }
        },
      }),
  })
  .required();

export const personalCompliance_schema = yup
  .object({
    BVN: yup
      .string()
      .required("BVN is required")
      .matches(/^\d{1,11}$/, "BVN should not be longer than 11 digits"),
    country: yup
      .string()
      .required("Country is required")
      .matches(/^[a-zA-Z ]+$/, "Country Should not contain a number"),
    state: yup
      .string()
      .required("State is required")
      .matches(/^[a-zA-Z ]+$/, "State Should not contain a number"),
    city: yup
      .string()
      .required("City is required")
      .matches(/^[a-zA-Z ]+$/, "City Should not contain a number"),
    LGA: yup
      .string()
      .required("LGA is required")
      .matches(/^[a-zA-Z ]+$/, "LGA Should not contain a number"),
    address: yup
      .string()
      .required("Address is required")
      .matches(/^[a-zA-Z ]+$/, "Address Should not contain a number"),
    NIN: yup
      .string()
      .required("NIN is required")
      .matches(/^\d{1,11}$/, "NIN should not be longer than 11 digits"),
    nin: yup
      .mixed()
      .test({
        name: "required",
        message: "Certificate of incorporation is requried",
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

// export const Compliance_schema = yup
//   .object({
//     BVN: yup
//       .string()
//       .required("BVN is required")
//       .matches(/^\d{1,11}$/, "BVN should not be longer than 11 digits"),
//     country: yup.string().required("Country is required"),
//     state: yup.string().required("State is required"),
//     city: yup.string().required("City is required"),
//     LGA: yup.string().required("LGA is required"),
//     address: yup.string().required("Address is required"),

//     businessName: yup.string().when("disabled", (disabled, schema) => {
//       if (disabled[0] === undefined) {
//         return schema;
//       } else if (disabled[0] === "Business") {
//         // console.log("disabled[0]:", disabled[0] === "Business");
//         // console.log(disabled[0] === "Business");
//         return schema.required("Business Name is required");
//       } else {
//         // console.log("disabled[0]:", disabled);
//         // console.log(disabled[0] === "Business");
//         return schema.required("Business Name is required");
//       }
//     }),

//     businessAddress: yup.string().when("disabled", (disabled, schema) => {
//       if (disabled[0] === undefined) {
//         return;
//       } else if (disabled[0] === "Business") {
//         // console.log("disabled[0]:", disabled[0] === "Business");
//         // console.log(disabled[0] === "Business");
//         return schema.required("Business Name is required");
//       } else {
//         // console.log("disabled[0]:", disabled);
//         // console.log(disabled[0] === "Business");
//         return schema.required("Business Name is required");
//       }
//     }),
//     NIN: yup
//       .string()
//       .required("NIN is required")
//       .matches(/^\d{1,11}$/, "NIN should not be longer than 11 digits"),
//     nin: yup
//       .mixed()
//       .test({
//         name: "required",
//         message: "NIN document is requried",
//         test: (value) => value?.length > 0,
//       })
//       .test({
//         name: "fileSize",
//         message: "file uploaded is larger than 500kb",
//         test: (value) => {
//           if (typeof value === "object") {
//             return value[0]?.size < 500000;
//           } else {
//             return true;
//           }
//         },
//       }),

//     cert: yup.mixed().when("disabled", (disabled, schema) => {
//       if (disabled[0] === "Business") {
//         return schema
//           .test({
//             name: "required",
//             message: "Certificate of incorporation is requried",
//             test: (value) => value?.length > 0,
//           })
//           .test({
//             name: "fileSize",
//             message: "file uploaded is larger than 500kb",
//             test: (value) => {
//               if (typeof value === "object") {
//                 return value[0]?.size < 500000;
//               } else {
//                 return true;
//               }
//             },
//           });
//       }
//     }),

//     memo: yup.mixed().when("disabled", (disabled, schema) => {
//       if (disabled[0] === "Business") {
//         return schema
//           .test({
//             name: "required",
//             message: "Memorandum is requried",
//             test: (value) => value?.length > 0,
//           })
//           .test({
//             name: "fileSize",
//             message: "file uploaded is larger than 500kb",
//             test: (value) => {
//               if (typeof value === "object") {
//                 return value[0]?.size < 500000;
//               } else {
//                 return true;
//               }
//             },
//           });
//       }
//     }),
//   })
//   .required();

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
    firstName: yup.string().when("isDisabled", (isDisabled, schema) => {
      if (!isDisabled) {
        console.log(isDisabled);
        return schema.required("First Name is required");
      }
      return schema;
    }),
    lastName: yup.string().when("isDisabled", (isDisabled, schema) => {
      if (!isDisabled) {
        console.log(isDisabled);
        return schema.required("Last name is required");
      }
      return schema;
    }),
    email: yup.string().required("Email is required"),
    sex: yup.string().when("isDisabled", (isDisabled, schema) => {
      if (isDisabled[0] !== true) {
        console.log(isDisabled[0]);
        return schema.required("Sex is required");
      }
      return schema;
    }),
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
    amount: yup.number().required("Amount is required"),
    narration: yup.string(),
  })
  .required();

export const Airtime_schema = yup
  .object({
    serviceNetwork: yup.string().required("Bank Name is required"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
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
