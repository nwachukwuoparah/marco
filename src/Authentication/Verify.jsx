import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import background from "../assets/background.jpg";
import marco from "../assets/marco.png";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../Component/Apis/Mutation/mutate";
const Verify = (props) => {
  const Navigate = useNavigate();
  const { token } = useParams();

  const { data, error, isLoading, mutate } = useMutation(["verify"], verify, {
    onSuccess: () => {
      setTimeout(() => {
        Navigate("/login");
      }, 2000);
    },
  });

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
      <img
        src={marco}
        onClick={() => mutate(token)}
        style={{ width: "60px" }}
        alt="logo"
      />
    </Container>
  );
};

export default Verify;
