import { Stack, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const InputSelect = (props) => {
  return (
    <Stack sx={{ width: { md: props.width, xs: "100%" } }}>
      <label style={{ marginLeft: "5px", fontSize: "14px", fontWeight: 500 }}>
        {props.label}
      </label>
      <select
        style={{
          outline: "none",
          padding: props.padding,
          width: "100%",
          border: props.errors[props.name] ? "1px solid red" : props.border,
          borderRadius: "5px",
          opacity: props.disabled && 0.4,
        }}
        name={props.name}
        {...props.register(props.name)}
        disabled={props.disabled}
      >
        {props?.value.map((i, index) => (
          <option key={index} value={i.value}>
            {i.title}
          </option>
        ))}
      </select>
    </Stack>
  );
};

const Input = (props) => {
  return (
    <Stack sx={{ width: { md: props.width, xs: "100%" } }}>
      <label style={{ marginLeft: "5px", fontSize: "14px", fontWeight: 500 }}>
        {props.label}
      </label>
      <Stack
        direction="row"
        style={{
          outline: "none",
          padding: props.padding,
          type: props.type,
          width: "100%",
          border:
            props.errors[props.name] || props.apiError
              ? "1px solid red"
              : props.border,
          borderRadius: "5px",
          opacity: props.disabled && 0.4,
          backgroundColor: "#f8f8f8",
        }}
      >
        <input
          style={{
            outline: "none",
            width: "100%",
            border: "none",
            backgroundColor: "#f8f8f8",
          }}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          {...props.register(props.name)}
          disabled={props?.disabled}
          defaultValue={props?.defaultValue}
        />
        <>
          {props.password && (
            <>
              {props.toggle ? (
                <VisibilityIcon
                  sx={{ opacity: props.disabled && 0.4, color: "grey" }}
                  onClick={props.Toggle}
                />
              ) : (
                <VisibilityOffIcon
                  sx={{ opacity: props.disabled && 0.4, color: "grey" }}
                  onClick={props.Toggle}
                />
              )}
            </>
          )}
        </>
      </Stack>
      <Typography sx={{ color: "red" }}>
        {props.apiError
          ? props.apiError?.message
          : props.errors[props.name]?.message}
      </Typography>
      <Typography sx={{ marginLeft: "5px" }}>
        {props.apiData && props.apiData}
      </Typography>
    </Stack>
  );
};

export default Input;
