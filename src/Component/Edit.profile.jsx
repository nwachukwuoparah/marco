import { Button, Container, Stack, Typography, colors } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import Button_component from "./Button";
import { Global_context } from "./Context.api";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User_schema } from "./Schema";
import { Change_schema } from "./Schema";
import Confirm_password from "../Authentication/Confirm.password/Confirm.password";
const Edit_profile = ({ setToggleProfile }) => {
  const { setRouth } = useContext(Global_context);

  const [confirm, setConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(User_schema),
  });

  const {
    register: register_change_password,
    handleSubmit: handle_change_password,
    watch: watch_change_password,
    formState: { errors: change_password_errors },
  } = useForm({
    resolver: yupResolver(Change_schema),
  });

  const onSubmit = (data) => {
    const { image, ...others } = data;
    console.log({ ...others, image: image[0] });
  };

  const From_input = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Frst Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "last Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 4,
      name: "pnonenumber",
      type: "text",
      placeholder: "Phone Number",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 8,
      name: "sex",
      type: "text",
      placeholder: "Sex",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
  ];

  useEffect(() => {
    setRouth("Profile/Edit Profile");
  }, []);


  return (
    <Stack
      sx={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "80vh",
        padding: "20px 0px",
      }}
  >
      {confirm && <Confirm_password  setConfirm={setConfirm} />}
      <Stack
        // direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ bgcolor: "#f7f9fb", padding: "30px 30px", borderRadius: "10px" }}
      >
        <Stack direction="roe" justifyContent="space-between">
          <Typography>Edit Profile</Typography>
          <Stack
            direction="row"
            sx={{ cursor: "pointer", alignItems: "center" }}
            onClick={() => setToggleProfile(true)}
          >
            <ArrowBackIcon sx={{ fontSize: "20px" }} />
            <Typography>Back</Typography>
          </Stack>
        </Stack>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            position: "relative",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <AccountCircleIcon sx={{ fontSize: "110px", color: "#03a9f4" }} />
              <input name="image" hidden type="file" {...register("image")} />
            </label>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: errors["image"] ? "red" : "#03a9f4",
              }}
              variant="body1"
            >
              Upload a clear picture
            </Typography>
          </Stack>

          <Stack spacing={4.5} sx={{ width: { md: "70%", xs: "100%" } }}>
            <Stack
              justifyContent="space-between"
              direction="row"
              flexWrap="wrap"
              gap="30px"
              sx={{ width: "100%" }}
            >
              {From_input.map((i) => (
                <Input
                  key={i.id}
                  width="48%"
                  {...i}
                  register={register}
                  errors={errors}
                />
              ))}
            </Stack>
          </Stack>

          <Stack
            spacing={3}
            direction="row"
            borderTop=" 1px solid #e3ebf6"
            paddingTop="28px"
            width={{ md: "33.5%", xs: "100%" }}
          >
            <Button_component
              content="Save changes"
              boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
              bgcolor="#03a9f4"
              width="35%"
              height="45px"
              radius="2px"
              color="#fff"
              fontSize="15px"
            />
          </Stack>
        </form>
      </Stack>

      <form
        onSubmit={handle_change_password((data) => {
          console.log(data);
          console.log("call");
          setConfirm(true);
        })}
      >
        <Stack
          // direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            bgcolor: "#f7f9fb",
            padding: "20px 30px",
            borderRadius: "10px",
          }}
        >
          <Typography>Change Password</Typography>

          {[
            {
              id: 1,
              name: "oldpassword",
              type: "text",
              placeholder: "Old Password",
              border: "1px solid rgba(28, 28, 28, 25%)",
              padding: "10px 15px",
            },
            {
              id: 2,
              name: "newpassword",
              type: "text",
              placeholder: "New Password",
              border: "1px solid rgba(28, 28, 28, 25%)",
              padding: "10px 15px",
            },
          ].map((i) => (
            <Input
              key={i.id}
              width="48%"
              {...i}
              register={register_change_password}
              errors={change_password_errors}
            />
          ))}

          <Stack
            spacing={3}
            direction="row"
            borderTop=" 1px solid #e3ebf6"
            paddingTop="28px"
            width={{ md: "33.5%", xs: "100%" }}
          >
            <Button_component
              content="Change password"
              boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
              bgcolor="#03a9f4"
              width="45%"
              height="45px"
              radius="2px"
              color="#fff"
              fontSize="15px"
            />
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Edit_profile;
