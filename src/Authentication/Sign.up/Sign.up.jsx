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
      key: 3,
      id: "first name",
      placeholder: "First Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding:"10px 15px"
    },
    {
      key: 5,
      id: "last name",
      placeholder: "Last Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding:"10px 15px"
    },
    {
      key: 3,
      id: "Email",
      placeholder: "Email",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding:"10px 15px"
    },
    {
      key: 5,
      id: "Password",
      placeholder: "Password",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding:"10px 15px"
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
          width: { md: "50%", xs: "100%" },
          boxShadow: {
            md: " 0px 0px 3px -1px rgba(66, 68, 90, 1)",
            xs: "none",
          },
          borderRadius: { md: "12px", xs: "0px" },
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
                routh="/verify"
                variant="contained"
                content="Create your free account"
                boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
                bgcolor="#03a9f4"
                Hbgcolor="#03a9f4"
                width="100%"
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
