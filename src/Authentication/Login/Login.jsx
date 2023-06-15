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
const Login = (props) => {
  const Navigate = useNavigate();

  const From_input = [
    {
      key: 1,
      id: "email",
      label: "Email",
    },
    {
      key: 2,
      id: "password",
      label: "Password",
    },
  ];

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
      <Stack
        direction={{ md: "row", xs: "column" }}
        sx={{
          width: "50%",
          height: "68.5%",
          boxShadow:
            " 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)",
          borderRadius: "12px",
        }}
      >
        <Stack
          sx={{
            width: { md: "50%" },
            height: { md: "100%" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f5f5f5",
          }}
        >
          <img style={{ width: "78%" }} src={login_illustration} alt="image" />
        </Stack>

        <Stack
          sx={{
            width: { md: "50%" },
            height: { md: "100%" },
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              width: "80%",
              bgcolor: "white",
              height: "83.5%",
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
                  Sign In
                </Typography>
              </span>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
                Welcome back, please login to your account.
              </Typography>
            </Stack>
            <Stack spacing={4.5}>
              <Stack spacing={3}>
                {From_input.map((i) => (
                  <Input {...i} variant="outlined" />
                ))}

                <Stack direction="row" justifyContent="space-between">
                  <FormControlLabel
                    disableGutters
                    sx={{
                      lineHeight: "24px",
                      color: "rgba(0, 0, 0, 0.87)",
                      height: "17px",
                    }}
                    label="Remember me"
                    control={<Checkbox disableRipple />}
                  />
                  <Typography
                    onClick={() => Navigate("/forgot.password")}
                    sx={{ cursor: "pointer", fontSize: "14px" }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  marginTop: "70px",
                }}
              >
                <Button_component
                  routh="/"
                  variant="outlined"
                  content="Register"
                  disableElevation="disableElevation"
                  width="117px"
                  borderColor="rgba(0,0,0,.12)"
                  HborderColor="rgba(0,0,0,.12)"
                  height="36px"
                />
                <Button_component
                  variant="contained"
                  content="Login"
                  bgcolor="#03a9f4"
                  Hbgcolor="#03a9f4"
                  disableElevation="disableElevation"
                  width="100px"
                  height="36px"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
