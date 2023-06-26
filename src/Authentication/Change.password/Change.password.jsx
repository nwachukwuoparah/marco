import {
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import background from "../../../public/background.jpg";
import login_illustration from "../../../public/login_illustration.png";
import marco from "../../../public/marco.png";
import Input from "../../Component/Input";
import Button_component from "../../Component/Button";
import { useNavigate } from "react-router-dom";
const Change_password = (props) => {
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
              New Password
            </Typography>
          </Stack>

          <TextField id="standard-basic" label="Email" variant="standard" />

          <Button_component
            variant="contained"
            content="CHANGE PASSWORD"
            bgcolor="#03a9f4"
            Hbgcolor="#03a9f4"
            disableElevation="disableElevation"
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Change_password;
