import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Button_component = (props) => {
  const Navigate = useNavigate();
  const styles = {
    height: props.height,
    width: props.width,
    color: props.color,
    bgcolor: props.bgcolor,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    userSelect: props.userSelect,
    cursor: "pointer",
    textTransform: "none",
    boxShadow: props.boxShadow,
    borderColor: props.borderColor,
    "&:hover": {
      bgcolor: props.Hbgcolor,
      borderColor: props.HborderColor,
    },
  };

  return (
    <>
      <Button
        onClick={() => {
          Navigate(props.routh);
        }}
        variant={props.variant}
        disableElevation
        sx={styles}
      >
        {props.content}
      </Button>
    </>
  );
};

export default Button_component;
