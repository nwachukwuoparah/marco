import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import background from "../../../public/background.jpg";
import marco from "../../../public/marco.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button_component from "../../Component/Button";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Change_schema } from "../../Component/Schema";
import * as yup from "yup";

const Confirm_schema = yup
.object({
  currentpassword: yup
    .string()
    .required("Current Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
      "Password should contain 6 characters(lowercase and uppercase) and at least one special"
    ),
})

const Confirm_password = ({ setConfirm }) => {
  const Navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Confirm_schema),
  });

  const onSubmit = (data) => console.log(data);

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
        placeContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        zIndex: 100,
        top: 0,
        left: 0,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { md: "25%", xs: "85%" },
          padding: "60px 0px",
          boxShadow:
            " 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)",
          borderRadius: "6px",
          borderTop: "4.5px solid  #b3e5fc",
          bgcolor: "white",
        }}
      >
        <Stack
          spacing={2.5}
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
                fontWeight: 400,
                lineHeight: 1,
                color: "inherit",
                fontSize: "17px",
                fontWeight: 500,
              }}
            >
              Confirm Password
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="currentpassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    sx={{
                      borderBottom: errors["currentpassword"] && "2px solid red",
                    }}
                    {...field}
                    variant="standard"
                    label="Confirm Password"
                  />
                )}
              />
              <Typography sx={{ color: "red" }}>
                {errors["currentpassword"]?.message}
              </Typography>
              <Button_component
                content="CONFIRM PASSWORD"
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
            onClick={() => setConfirm(false)}
          >
            <ArrowBackIcon sx={{ fontSize: "20px", color: "#03a9f4" }} />
            <Typography sx={{ color: "#03a9f4" }}>Back</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Confirm_password;
