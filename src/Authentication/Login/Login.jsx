import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import background from "../../../public/background.jpg";
import login_illustration from "../../../public/login_illustration.png";
import marco from "../../../public/marco.png";
import Input from "../../Component/Input";
import Button_component from "../../Component/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.number().positive().integer().required(),
    memo: yup.boolean().required(),
  })
  .required();

const Login = (props) => {
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const From_input = [
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      type: "email",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
      type: "text",
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
        padding: { md: "0px", xs: "10vh 0vh" },
        backgrounflexFlow: "row wrap",
        boxSizing: " border-box",
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${background})`,
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        sx={{
          width: { md: "50%", xs: "100%" },
          boxShadow: {
            md: " 0px 0px 3px -1px rgba(66, 68, 90, 1)",
            xs: "none",
          },
          borderRadius: { md: "12px", xs: "0px" },
        }}
        spacing={{ md: 0, xs: 5 }}
      >
        <Stack
          sx={{
            width: { md: "50%", xs: "100%" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: { md: "#f5f5f5", xs: "none" },
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
                    bgcolor: "none",
                  }}
                >
                  Sign In
                </Typography>
              </span>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  Don't have an account?
                </Typography>
                
                <Button_component
                  routh="/"
                  variant="text"
                  content="SignUp"
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
                // console.log(data);
                Navigate("/dashboard");
              })}
            >
              <Stack spacing={2.5}>
                {From_input.map((i) => (
                  <Input
                    {...i}
                    register={register}
                    errors={errors}
                    width="100%"
                  />
                ))}

                <Stack direction="row" justifyContent="space-between">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="memo"
                      {...register("memo")}
                      disableRipple
                    />
                    Remember me
                  </label>

                  <Typography
                    onClick={() => Navigate("/forgot.password")}
                    sx={{
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#03a9f4",
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>

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

export default Login;
