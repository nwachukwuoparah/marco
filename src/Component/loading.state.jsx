import { Container } from "@mui/material";
import React from "react";
import image from "../assets/marco.png";

const Loadind = (props) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        height:"100vh",
        backgroundColor:"white",
        zIndex:1000
      }}
    >
      <img className="loading" src={image} />
    </Container>
  );
};

export default Loadind;
