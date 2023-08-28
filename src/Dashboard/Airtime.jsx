import React, { useEffect, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import Display_card from "../Component/wallet.card";
import background from "../assets/background.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Input from "../Component/Input";
import Button_component from "../Component/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Airtime_schema } from "../Component/Schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Confirm_Pin from "../Authentication/confirmPin";
import { airtime } from "../Component/Apis/mutate";

const Airtime = (props) => {
  const queryClient = useQueryClient();
  const Navigate = useNavigate();
  const [value, setValue] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Airtime_schema),
  });

  const From_input = [
    {
      id: 1,
      name: "serviceNetwork",
      type: "text",
      placeholder: "Select Biller",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Enter Phone Number",
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
  ];

  const { data, error, isLoading, mutate, status } = useMutation(
    ["airtime"],
    airtime,
    {
      onSuccess: async (data) => {
        console.log(data)
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        Navigate(`/dashboard/single-transaction/${data?.data.data}`);
      },
      onError: async (data, error) => {
        if (error?.response?.data.message === "Token has expired") {
          await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        } else {
          setValue(null);
        }
      },
    }
  );

  useEffect(() => {
    console.log(error?.response?.data?.message);
  }, [error]);

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
              width: "60%",
              // height: "85.5%",
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
                Get 10% off of every 50,000 one time
                <br /> Daily Transaction
              </Typography>
              {error?.response?.data?.message === "Invalid Pin" && (
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "red",
                  }}
                >
                  {error?.response?.data?.message}
                </Typography>
              )}
            </Stack>

            <form
              onSubmit={handleSubmit((data) => {
                setValue(data);
              })}
            >
              <Stack spacing={3}>
                {From_input.map((i) => (
                  <Input
                    key={i.id}
                    {...i}
                    register={register}
                    errors={errors}
                  />
                ))}
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
      )}
    </Container>
  );
};

export default Airtime;
