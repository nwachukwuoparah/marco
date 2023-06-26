import { Button, Container, Stack, Typography, colors } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Input from "./Input";
import Button_component from "./Button";
import { Global_context } from "./Context.api";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
const Edit_profile = ({ setToggleProfile }) => {
  const { setRouth } = useContext(Global_context);

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
      <Stack
        // direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ bgcolor: "#f7f9fb", padding: "30px 30px", borderRadius: "10px" }}
      >
        <Stack direction="roe" justifyContent="space-between">
          <Typography>Edit Profile</Typography>
          <ReplyAllIcon
            onClick={() => setToggleProfile(true)}
            sx={{ fontSize: "40px" }}
          />
        </Stack>

        <Stack justifyContent="space-between" direction="row" width="55%">
          {[1, 2].map(() => (
            <Input
              padding="15px 15px"
              width="48%"
              border="1px solid rgba(28, 28, 28, 25%)"
            />
          ))}
        </Stack>

        {[1, 2, 3, 4, 5].map(() => (
          <Input
            padding="20px 15px"
            width="55%"
            border="1px solid rgba(28, 28, 28, 25%)"
          />
        ))}

        <Button_component
          // routh="/dashboard"
          variant="contained"
          content="Update Profile"
          boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
          bgcolor="#03a9f4"
          Hbgcolor="#03a9f4"
          width="55%"
          height="50px"
        />


        
      </Stack>

      <Stack
        // direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ bgcolor: "#f7f9fb", padding: "20px 30px", borderRadius: "10px" }}
      >
        <Typography>Change Password</Typography>
        {[{ label: "Old Password" }, { label: "New Password" }].map((i) => (
          <Input
            padding="15px 15px"
            width="48%"
            label={i.label}
            border="1px solid rgba(28, 28, 28, 25%)"
          />
        ))}

        <Button_component
          // routh="/dashboard"
          variant="contained"
          content="Change Password"
          boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
          bgcolor="#03a9f4"
          Hbgcolor="#03a9f4"
          width="48%"
          height="50px"
        />
      </Stack>
    </Stack>
  );
};

export default Edit_profile;
