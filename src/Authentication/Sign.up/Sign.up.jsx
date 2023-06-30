import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import background from "../../../public/background.jpg";
import login_illustration from "../../../public/login_illustration.png";
import marco from "../../../public/marco.png";
import Input from "../../Component/Input";
import Button_component from "../../Component/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Signup_schema } from "../../Component/Schema";

const Sign_up = (props) => {
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Signup_schema ),
  });

  const From_input = [
    {
      id: 3,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 5,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 5,
      name: "password",
      type: "text",
      placeholder: "Password",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: { md: "100vh", xs: "none" },
        padding: { md: "0px", xs: "7vh 0vh" },
        backgrounflexFlow: "row wrap",
        boxSizing: " border-box",
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: { md: `url(${background})`, xs: "none" },
        backgroundImage: `url(${background})`,
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        sx={{
          width: { md: "60%", xs: "100%" },
          boxShadow: {
            md: " 0px 0px 3px -1px rgba(66, 68, 90, 1)",
            xs: "none",
          },
        }}
        // bgcolor="red"
        spacing={{ md: 0, xs: 5 }}
      >
        <Stack
          sx={{
            display: "flex",
            width: { md: "50%", xs: "100%" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: { md: "#f5f5f5", xs: "none" },
            borderRadius: { md: "12px 0px 0px 12px" },
          }}
        >
          <img style={{ width: "78%" }} src={login_illustration} alt="image" />
        </Stack>

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
              width: "80%",
              // height: "85.5%",
            }}
            spacing={3.5}
          >
            <Stack variant="span" spacing={1}>
              <span>
                <img src={marco} style={{ width: "60px" }} alt="logo" />
                <Typography
                  variant="h3"
                  sx={{
                    marginTop: 0,
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "inherit",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  Sign Up
                </Typography>
              </span>

              <Stack direction="row" alignItems="center">
                <Typography sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  Already have an account?
                </Typography>
                <Button_component
                  routh="/login"
                  variant="text"
                  content="Login"
                  fontWeight={400}
                  fontSize="14px"
                  color="#03a9f4"
                  userSelect="none"
                  bgcolor="none"
                />
              </Stack>
            </Stack>
            <form
              onSubmit={handleSubmit((data) => {
                Navigate("/verify");
              })}
            >
              <Stack spacing={3}>
                {From_input.map((i) => (
                  <Input {...i} register={register} errors={errors} />
                ))}
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: errors["terms"] ? "red" : "inherit",
                  }}
                >
                  <input
                    type="checkbox"
                    name="terms"
                    {...register("terms")}
                    disableRipple
                  />
                  I agree with terms and condtions
                </label>

                <Button_component
                  content="Create your free account"
                  boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
                  bgcolor="#03a9f4"
                  width="100%"
                  height="36px"
                  radius="5px"
                  color="#fff"
                />
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Sign_up;
