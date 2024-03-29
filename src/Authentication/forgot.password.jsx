import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
const { VITE_userToken } = import.meta.env;
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import background from "../assets/background.jpg";
import login_illustration from "../assets/login_illustration.png";
import marco from "../assets/marco.png";
import Input from "../Component/Input";
import Button_component from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Forget_schema } from "../Component/Schema";
import { forgotPassword } from "../Component/Apis/mutate";
import { Global_context } from "../Component/Context.api";
import Message from "../Component/message";
import Toste from "../Component/toste";

const Forgot_password = () => {
  const { toste, setToste } = useContext(Global_context);
  const Navigate = useNavigate();
  const { message, setMessage } = useContext(Global_context);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Forget_schema),
  });

  const { data, error, isLoading, mutate } = useMutation(
    ["forgotPassword"],
    forgotPassword
  );
  useLayoutEffect(() => {
    if (localStorage.getItem(VITE_userToken)) {
      Navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    console.log(error);
    if (data || error) {
      setToste(true);
    }
    setTimeout(() => {
      setToste(false);
    }, 5000);
  }, [error, data]);

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
      <Toste
        suscess={data?.data.message}
        error={error?.response?.data.message}
      />
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { md: "25%", xs: "85%" },
          padding: "60px 0px",
          boxShadow: " 0px 0px 3px -1px rgba(66, 68, 90, 1)",
          borderRadius: "6px",
          borderTop: "4.5px solid  #b3e5fc",
          bgcolor: "white",
        }}
      >
        {" "}
        <Stack
          spacing={2}
          sx={{
            width: { md: "76%" },
            bgcolor: "white",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            spacing={1.5}
          >
            <img src={marco} style={{ width: "60px" }} alt="logo" />
            <Typography
              variant="h3"
              sx={{
                marginTop: 0,
                lineHeight: 1,
                color: "inherit",
                fontSize: "17px",
                fontWeight: 500,
              }}
            >
              Forgot Password
            </Typography>
            <Typography sx={{ color: "rgba(0,0,0,.54)", fontSize: "14px" }}>
              Enter your email for password recovery.
            </Typography>
          </Stack>

          <form onSubmit={handleSubmit((data) => mutate(data))}>
            <Stack spacing={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    sx={{
                      borderBottom: errors["email"] && "2px solid red",
                    }}
                    {...field}
                    variant="standard"
                    label="Email"
                  />
                )}
              />

              <Button_component
                loading={isLoading}
                content="SEND RECOVERY LINK"
                boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
                bgcolor="#03a9f4"
                width="100%"
                height="36px"
                radius="5px"
                color="#fff"
              />
            </Stack>
          </form>

          <Stack direction="row" justifyContent="space-between">
            <Typography
              onClick={() => Navigate("/login")}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#03a9f4",
              }}
              variant="p"
            >
              Sign in
            </Typography>

            <Typography
              onClick={() => Navigate("/")}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#03a9f4",
              }}
              variant="p"
            >
              Create a new account
            </Typography>
          </Stack>
        </Stack>{" "}
      </Stack>
    </Container>
  );
};

export default Forgot_password;
