import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Button_component = (props) => {
  const Navigate = useNavigate();
  const styles = {
    height: props.height,
    width: props.width,
    color: props.color,
    background: props.bgcolor,
    opacity: props.loading && "0.9",
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    userSelect: props.userSelect,
    borderRadius: props.radius,
    cursor: "pointer",
    textTransform: "none",
    boxShadow: props.boxShadow,
    border: props.border ? props.border : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <button
        disabled={props.loading ? true : false}
        onClick={props.click}
        style={styles}
      >
        {props.loading ? (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <div className="loader"></div>
            <h2>Loading...</h2>
          </Stack>
        ) : (
          props.content
        )}
      </button>
    </>
  );
};

export default Button_component;
