import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Display_card from "../Component/Display.card";
import background from "../../public/background.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Input from "../Component/Input";
import Button_component from "../Component/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Transfer_schema } from "../Component/Schema";
import { useNavigate } from "react-router-dom";
const Transfer = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Transfer_schema),
  });

  const From_input = [
    {
      id: 3,
      name: "bank_name",
      type: "text",
      placeholder: "Select Bank",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 5,
      name: "account_number",
      type: "text",
      placeholder: "Enter Destination Account",
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
    {
      id: 5,
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
      }}
    >
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
              Available Daily Transaction limit:
              <br /> 1,000,000.00
            </Typography>
            <Typography sx={{ fontWeight: 400 }}>
              Enter Transfer Details
            </Typography>
          </Stack>

          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Stack spacing={3}>
              {From_input.map((i) => (
                <Input {...i} register={register} errors={errors} />
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
              navigate("/dashboard/");
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "20px", color: "#03a9f4" }} />
            <Typography sx={{ color: "#03a9f4" }}>Back</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Transfer;
