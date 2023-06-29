import React from "react";
import { useNavigate } from "react-router-dom";

const Button_component = (props) => {
  const Navigate = useNavigate();
  const styles = {
    height: props.height,
    width: props.width,
    color: props.color,
    background: props.bgcolor,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    userSelect: props.userSelect,
    borderRadius: props.radius,
    cursor: "pointer",
    textTransform: "none",
    boxShadow: props.boxShadow,
    border: props.border ? props.border : "none",
  };

  return (
    <>
      <button
        onClick={() => {
          Navigate(props.routh);
        }}
        style={styles}
      >
        {props.content}
      </button>
    </>
  );
};

export default Button_component;
