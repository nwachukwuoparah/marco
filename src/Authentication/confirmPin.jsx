import OtpInput from "../Component/password.input";
import React, { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import background from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button_component from "../Component/Button";
import { transfer } from "../Component/Apis/mutate";
const Confirm_Pin = ({ value }) => {
  const Navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, error, isLoading, mutate, status } = useMutation(
    ["transfer"],
    transfer,
    {
      onSuccess: async (data) => {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        // Navigate("/dashboard");
        console.log("called");
      },
    }
  );





  const onSubmit = (pin) => {
    const { amount, ...others } = value;
    // console.log({ amount: Number(amount), ...others, ...pin });
    mutate({ amount: Number(amount), ...others, ...pin });
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: "fixed",
        height: "100vh",
        backgrounflexFlow: "row wrap",
        boxSizing: " border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        top: 0,
        left: 0,
        zIndex: 20,
      }}
    >
      <Stack
        sx={{
          width: { md: "50%", xs: "100%" },
          padding: "30px 0px",
          bgcolor: { md: "white", xs: "none" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: { md: "0px 12px 12px 0px" },
        }}
      >
        <Stack
          sx={{
            width: { md: "60%", xs: "85%" },
          }}
          spacing={3.5}
        >
          <Stack
            spacing={4}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "20px", fontWeight: 500 }}
            >
              Create a Four digit pin
            </Typography>
            <OtpInput mutate={onSubmit} isLoading={isLoading} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Confirm_Pin;
