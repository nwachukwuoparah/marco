import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Input = (props) => {
  return (
    <Stack sx={{ width: { md: props.width, xs: "100%" } }}>
      <input
        style={{
          outline: "none",
          bgcolor: "red",
          padding: props.padding,
          type: props.type,
          width: "100%",
          border: props.errors[props.name] ? "1px solid red" : props.border,
          borderRadius: "5px",
          opacity: props.disabled && 0.4,
        }}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        {...props.register(props.name)}
        disabled={props.disabled}
      />

      <Typography sx={{ color: "red" }}>
        {props.errors[props.name]?.message}
      </Typography>
    </Stack>
  );
};

export default Input;
