import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "../Component/Input";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Depopsit_schema } from "../Component/Schema";
import background from "../assets/background.jpg";
import Button_component from "../Component/Button";
import { deposite } from "../Component/Apis/mutate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Deposite = (props) => {
  const queryClient = useQueryClient();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Depopsit_schema),
    defaultValues: {
      cardNumber: "0000000000000000",
      expiryDate: "09/25",
      CVV: "230",
    },
  });

  const { data, error, isLoading, mutate, status } = useMutation(
    ["deposit"],
    deposite,
    {
      onSuccess: async (data) => {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        Navigate("/dashboard");
        console.log("called");
      },
      onError: (error) => {
        queryClient.invalidateQueries({ queryKey: ["getUser"] });
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
            <Typography sx={{ fontWeight: 400 }}>Enter Card Details</Typography>
          </Stack>
          <form
            onSubmit={handleSubmit((data) => {
              const { amount, ...others } = data;
              console.log({ amount: Number(amount), ...others });
              mutate({ amount: Number(amount), ...others });
            })}
          >
            <Stack spacing={3}>
              <Input
                name="cardNumber"
                type="text"
                border="1px solid rgba(28, 28, 28, 25%)"
                padding="10px 15px"
                register={register}
                errors={errors}
              />
              <Stack flexDirection="row" justifyContent="space-between">
                <Input
                  name="expiryDate"
                  type="text"
                  border="1px solid rgba(28, 28, 28, 25%)"
                  padding="10px 15px"
                  register={register}
                  errors={errors}
                  width="40%"
                />{" "}
                <Input
                  name="CVV"
                  type="text"
                  border="1px solid rgba(28, 28, 28, 25%)"
                  padding="10px 15px"
                  register={register}
                  errors={errors}
                  width="40%"
                />
              </Stack>
              <Input
                name="amount"
                type="text"
                border="1px solid rgba(28, 28, 28, 25%)"
                padding="10px 15px"
                register={register}
                errors={errors}
              />
              <Button_component
                loading={isLoading}
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
    </Container>
  );
};

export default Deposite;
