import { TextField } from "@mui/material";
import React from "react";

const Input = (props) => {
  return (
    <TextField
      sx={{
        type: props.type,
        width: props.width,
        height: props.height,
        border: props.border,
        borderColor: "white",
        "&:hover": { border: props.border },
        borderRadius: "5px",
        transition: "all 5s",
      }}
      id={props.id}
      label={props.label}
      variant={props.variant}
    />
  );
};

export default Input;
