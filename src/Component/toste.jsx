import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Global_context } from "./Context.api";

const Toste = ({ suscess, error }) => {
  const { toste } = useContext(Global_context);
  console.log(error);
  console.log(toste);
  return (
    <Stack
      sx={{
        position: "absolute",
        top: toste ? "30px" : "-50px",
        left: "500px",
        border: suscess
          ? "1px solid rgba(0, 128, 0,50%)"
          : "1px solid rgba(255, 0, 0,40%)",
        borderRadius: "8px",
        width: "300px",
        height: "50px",
        transition: "ease-in-out 1s",
        overflow: "hidden",
        "&:before": {
          content: `""`,
          width: "100%",
          height: "5%",
          bgcolor: suscess ? "rgba(0, 128, 0,80%)" : "rgba(255, 0, 0,80%)",
        },
        "&:after": {
          display: "flex",
          content: `"${suscess || error}"`,
          bgcolor: suscess ? "rgba(0, 128, 0,10%)" : "rgba(255, 0, 0,10%)",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: "15px",
          color: suscess ? "rgba(0, 128, 0)" : "rgba(255, 0, 0)",
        },
      }}
    ></Stack>
  );
};

export default Toste;
