import { TextField } from "@mui/material";
import React from "react";

const Input = (props) => {



  return (
    <input
      style={{
        outline: "none",
        bgcolor: "red",
        padding: props.padding,
        type: props.type,
        width: props.width,
        border: props.border,
        // borderColor: "white",
        // "&:hover": { border: props.border },
        borderRadius: "5px",
        transition: "all 5s",
      }}
      id={props.id}
      placeholder={props.placeholder}
      variant={props.variant}
    />
  );
};

export default Input;
