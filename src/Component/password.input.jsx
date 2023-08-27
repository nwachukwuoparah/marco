import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button_component from "./Button";

const validationSchema = yup.object().shape({
  digit0: yup
    .string()
    .required("Digit 1 is required")
    .matches(/^\d$/, "Enter a single digit"),
  digit1: yup
    .string()
    .required("Digit 2 is required")
    .matches(/^\d$/, "Enter a single digit"),
  digit2: yup
    .string()
    .required("Digit 3 is required")
    .matches(/^\d$/, "Enter a single digit"),
  digit3: yup
    .string()
    .required("Digit 4 is required")
    .matches(/^\d$/, "Enter a single digit"),
});

const OtpInput = ({ mutate, isLoading }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleKeyPress = (event, index) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      !inputRefs[index].current.value
    ) {
      inputRefs[index - 1].current.focus();
    } else if (event.key >= "0" && event.key <= "9") {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const inputRefs = [
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
  ];

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
      onSubmit={handleSubmit((data) => {
        const { digit0, digit1, digit2, digit3 } = data;
        mutate({ bankPin: `${digit0}${digit1}${digit2}${digit3}` });
      })}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[0, 1, 2, 3].map((index) => (
          <Controller
            key={index}
            name={`digit${index}`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                ref={(el) => {
                  inputRefs[index].current = el;
                  field.ref(el);
                }}
                type="text"
                maxLength={1}
                style={{
                  outline: "none",
                  border: "1px solid",
                  borderColor: errors[`digit${index}`] && "red",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                }}
                onKeyUp={(e) => handleKeyPress(e, index)}
              />
            )}
          />
        ))}
      </div>
      <Button_component
        loading={isLoading}
        content="CONTINUE"
        boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
        bgcolor="#03a9f4"
        width="100%"
        height="36px"
        radius="5px"
        color="#fff"
      />
    </form>
  );
};

export default OtpInput;
