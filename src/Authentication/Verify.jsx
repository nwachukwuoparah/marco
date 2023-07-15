import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import background from "../assets/background.jpg";
import marco from "../assets/marco.png";
import { useNavigate } from "react-router-dom";
const Verify = (props) => {

  const Navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      Navigate("/login");
    }, 2000);
  }, []);
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        backgrounflexFlow: "row wrap",
        boxSizing: " border-box",
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${background})`,
      }}
    >
      <img src={marco} style={{ width: "60px" }} alt="logo" />
    </Container>
  );
};

export default Verify;
