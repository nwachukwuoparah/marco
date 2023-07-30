import { Container, Stack } from "@mui/material";
import React, { useContext, useState, useLayoutEffect } from "react";
import Display_profile from "../Component/Display.profile";
import Edit_profile from "../Component/Edit.profile";
import { Global_context } from "../Component/Context.api";
import { Routes, Route, useNavigate } from "react-router-dom";
const Profile = ({ data }) => {
  const Navigate = useNavigate();

  useLayoutEffect(() => {
    if (data?.compliance === null) {
      Navigate("/dashboard/compliance");
    }
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        overflowY: "scroll",
        height: "80vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Display_profile value={data} />} />
        <Route path="/editprofile" element={<Edit_profile value={data} />} />
      </Routes>
    </Container>
  );
};

export default Profile;
