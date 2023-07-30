import { Container, Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import background from "../assets/background.jpg";
import marco from "../assets/marco.png";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../Component/Apis/mutate";

const Verify = (props) => {
  const Navigate = useNavigate();
  const { token } = useParams();

  const { data, error, isFetching, mutate } = useMutation(["verify"], verify, {
    retry: 3,
    cacheTime: 0,
    onSuccess: () => {
      setTimeout(() => {
        Navigate("/login");
      }, 2000);
    },
  });

  console.log(data);
  console.log(error);

  useLayoutEffect(() => {
    mutate(token);
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
        flexDirection: "column",
        placeContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${background})`,
      }}
    >
      <img className="loading" src={marco} alt="logo" />
    </Container>
  );
};

export default Verify;
