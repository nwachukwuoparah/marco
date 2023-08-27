import React, { useEffect, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import Display_card from "../Component/wallet.card";
import background from "../assets/background.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Input from "../Component/Input";
import Button_component from "../Component/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Transfer_schema } from "../Component/Schema";
import { useNavigate } from "react-router-dom";
import OtpInput from "../Component/password.input";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Confirm_Pin from "../Authentication/confirmPin";
import Pin from "./pin";
import { transfer } from "../Component/Apis/mutate";
import { getAccName } from "../Component/Apis/mutate";
import { height } from "@mui/system";
` `;
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

  const { data, error, isLoading, mutate, status } = useMutation(
    ["transfer"],
    transfer,
    {
      refetchOnWindowFocus: false,
      onSuccess: async (data) => {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        Navigate("/dashboard");
      },
      onError: async (error) => {  
        if (error?.response?.data.message === "Token has expired") {
          await queryClient.invalidateQueries({ queryKey: ["getUser"] }); 
        } else {
          setValue(null);
        }
      },
    }
  );

  const {
    data: accNameData,
    mutate: accNameMutate,
    isLoading: accNameLoading,
    error: accNameError,
  } = useMutation(["getAccName"], getAccName, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
      if (error?.response?.data.message === "Token has expired") {
        queryClient.invalidateQueries({ queryKey: ["getUser"] });
      } else {
        setTimeout((error) => {
          queryClient.invalidateQueries({ queryKey: ["getUser"] });
          Navigate("/dashboard");
          console.log(error);
        }, 4000);
      }
    },
    cacheTime: 0,
  });

  useEffect(() => {
    watch("accountNumber")?.length === 10
      ? accNameMutate(watch("accountNumber"))
      : null;
  }, [watch("accountNumber")]);

  const From_input = [
    {
      id: 1,
      name: "accountNumber",
      type: "text",
      placeholder: "Enter Destination Account",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
      apiData: accNameData?.data.accountName,
    },
    {
      id: 2,
      name: "amount",
      type: "text",
      placeholder: "Enter Amount",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 3,
      name: "naration",
      type: "text",
      placeholder: "Enter Narration(Optional)",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
  ];

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
      {console.log(accNameError)}
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
              {accNameError ? (
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: accNameError ? "red" : "black",
                  }}
                >
                  {accNameError ? accNameError?.response?.data?.message : null}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: error ? "red" : "black",
                  }}
                >
                  {error
                    ? error?.response?.data?.message
                    : "Enter Transfer Details"}
                </Typography>
              )}
            </Stack>

            <form
              onSubmit={handleSubmit((data) => {
                setValue(data);
              })}
            >
              <Stack spacing={3} sx={{}}>
                <Stack
                  sx={{
                    display: accNameLoading ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bgcolor: "rgba(255,255,255,80%)",
                    width: "30%",
                    height: "37%",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <div className="loader"></div>
                    <h2>Loading...</h2>
                  </Stack>
                </Stack>
                {From_input.map((i) => (
                  <Input
                    key={i.id}
                    {...i}
                    register={register}
                    errors={errors}
                  />
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
