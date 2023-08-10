import React, { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import Display_card from "../Component/Display.card";
import background from "../assets/background.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Input from "../Component/Input";
import Button_component from "../Component/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Transfer_schema } from "../Component/Schema";
import { useNavigate } from "react-router-dom";
import OtpInput from "../Component/password.input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Confirm_Pin from "../Authentication/confirmPin";
import Pin from "./pin";
import { transfer } from "../Component/Apis/mutate";

const Transfer = (props) => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState(null);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Transfer_schema),
  });

  const From_input = [
    {
      id: 5,
      name: "accountNumber",
      type: "text",
      placeholder: "Enter Destination Account",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 3,
      name: "amount",
      type: "text",
      placeholder: "Enter Amount",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 5,
      name: "naration",
      type: "text",
      placeholder: "Enter Narration(Optional)",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
  ];

  const { data, error, isLoading, mutate, status } = useMutation(
    ["transfer"],
    transfer,
    {
      onSuccess: async (data) => {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        Navigate("/dashboard");
        console.log("called");
      },
    }
  );
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
      {value ? (
        <Confirm_Pin value={value} mutate={mutate} isLoading={isLoading} />
      ) : (
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
                sx={{ textAlign: "center", fontSize: "20px", fontWeight: 700 }}
              >
                Available Daily Transaction limit:
                <br /> 1,000,000.00
              </Typography>
              <Typography sx={{ fontWeight: 400 }}>
                Enter Transfer Details
              </Typography>
            </Stack>

            <form
              onSubmit={handleSubmit((data) => {
                setValue(data);
              })}
            >
              <Stack spacing={3}>
                {From_input.map((i) => (
                  <Input {...i} register={register} errors={errors} />
                ))}
                <Button_component
                  content="CONTINUE"
                  boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
                  bgcolor="#03a9f4"
                  width="100%"
                  height="36px"
                  radius="5px"
                  color="#fff"
                />
              </Stack>
            </form>
            <Stack
              spacing={1}
              direction="row"
              sx={{
                flex: 1,
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                Navigate("/dashboard/");
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "20px", color: "#03a9f4" }} />
              <Typography sx={{ color: "#03a9f4" }}>Back</Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default Transfer;
