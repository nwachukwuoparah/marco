import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import background from "../../../public/background.jpg";
import login_illustration from "../../../public/login_illustration.png";
import marco from "../../../public/marco.png";
import Input from "../../Component/Input";
import Button_component from "../../Component/Button";
import { useNavigate } from "react-router-dom";
const Sign_up = (props) => {
  const [loading, setLoading] = useState(true);

  const Navigate = useNavigate();

  const From_input = [
    {
      key: 1,
      id: "username",
      label: "Username",
    },
    {
      key: 2,
      id: "email",
      label: "Email",
    },
    {
      key: 3,
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
          width: { md: "50%", xs: "100%" },
          height: { md: "76%", xs: "120vh" },
          boxShadow:
            " 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)",
          borderRadius: "12px",
          bgcolor: "red",
        }}
      >
        <Stack
          sx={{
            width: { md: "50%" ,xs:"100%"},
            height: { md: "100%", xs: "40%" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f5f5f5",
            bgcolor: "red",
          }}
        >
          <img style={{ width: "78%" }} src={login_illustration} alt="image" />
        </Stack>

        <Stack
          sx={{
            width: { md: "50%", xs:"100%" },
            height: { md: "100%",xs: "60%" },
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
              height: "85.5%",
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
                />
              </Stack>
            </Stack>
            <Stack spacing={3}>
              {From_input.map((i) => (
                <Input {...i} variant="outlined" />
              ))}
              <Stack>
                <FormControlLabel
                  disablegutters="true"
                  sx={{
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.87)",
                    height: "17px",
                  }}
                  label=" I agree with terms and condtions"
                  control={<Checkbox disableRipple />}
                />
              </Stack>

              <Button_component
                routh="/login"
                variant="contained"
                content="Create your free account"
                boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
                bgcolor="#03a9f4"
                Hbgcolor="#03a9f4"
                width="218px"
                height="36px"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Sign_up;
